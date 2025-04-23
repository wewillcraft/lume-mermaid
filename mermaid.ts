import { merge } from "lume/core/utils/object.ts";
import type Site from "lume/core/site.ts";
import type { Page } from "lume/core/file.ts";

export interface Options {
  /**
   * CSS selector to find mermaid code blocks.
   * Default: "pre code.language-mermaid"
   */
  cssSelector?: string;

  /**
   * Whether to inject Mermaid.js automatically
   */
  injectScript?: boolean;

  /**
   * Mermaid.js CDN URL
   */
  mermaidJsUrl?: string;

  /**
   * Built-in Mermaid theme: "default" | "dark" | "forest" | "neutral"
   */
  theme?: "default" | "dark" | "forest" | "neutral";

  /**
   * Custom Mermaid config (merged into the default config)
   */
  config?: Record<string, unknown>;
}

export const defaults: Options = {
  cssSelector: "pre code.language-mermaid",
  injectScript: true,
  mermaidJsUrl:
    "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs",
  theme: "default",
  config: {},
};

export default function mermaid(userOptions?: Options) {
  const options = merge(defaults, userOptions);

  return (site: Site) => {
    site.process([".html"], (pages) => {
      pages.forEach((page) => renderMermaidDiagrams(page, options));
    });

    if (options.injectScript) {
      site.addEventListener("afterRender", () => {
        site.pages.forEach((page) => {
          if (!page.outputPath || !page.outputPath.endsWith(".html")) return;

          const theme = options.theme ?? "default";
          const config = { ...options.config, theme };
          const configJson = JSON.stringify(config, null, 2);

          const script = page.document!.createElement("script");
          script.setAttribute("type", "module");
          script.textContent = `
            import mermaid from "${options.mermaidJsUrl}";
            mermaid.initialize(${configJson});
          `;
          page.document!.head.appendChild(script);
        });
      });
    }
  };
}

function renderMermaidDiagrams(page: Page, options: Options) {
  const selector = options.cssSelector!;
  const blocks = page.document!.querySelectorAll(selector);

  blocks.forEach((codeBlock) => {
    const parent = codeBlock.parentElement;
    if (!parent || parent.tagName !== "PRE") return;

    const mermaidCode = codeBlock.textContent ?? "";
    const container = page.document!.createElement("div");
    container.className = "mermaid";
    container.innerHTML = mermaidCode;
    parent.replaceWith(container);
  });
}

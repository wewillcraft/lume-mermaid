# lume-mermaid

A plugin for [Lume](https://lume.land) to render [Mermaid](https://mermaid.js.org/) diagrams.

## Usage

```ts
// _config.ts
import lume from "lume/mod.ts";
import mermaid from "https://deno.land/x/lume_mermaid@v0.1.0/mod.ts";

const site = lume();

site.use(mermaid({
  theme: "dark",
  config: {
    startOnLoad: true,
    themeVariables: {
      primaryColor: "#ff69b4",
      edgeLabelBackground: "#222",
      background: "#111",
    },
  },
}));

export default site;
```

Change the version from `v0.1.0` to the latest version in [https://deno.land/x/lume_mermaid](https://deno.land/x/lume_mermaid).

## Options

```ts
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
```

## Testing Locally

```bash
# go to the test project directory
cd test

# start a local server
deno task serve
```

## Contributing

**Imposter syndrome disclaimer**: We want your help. No, really.

There may be a little voice inside your head that is telling you that you're not ready to be an open source contributor; that your skills aren't nearly good enough to contribute. What could you possibly offer a project like this one?

We assure you - the little voice in your head is wrong. If you can write code at all, you can contribute code to open source. Contributing to open source projects is a fantastic way to advance one's coding skills. Writing perfect code isn't the measure of a good developer (that would disqualify all of us!); it's trying to create something, making mistakes, and learning from those mistakes. That's how we all improve, and we are happy to help others learn.

Being an open source contributor doesn't just mean writing code, either. You can help out by writing documentation, tests, or even giving feedback about the project (and yes - that includes giving feedback about the contribution process). Some of these contributions may be the most valuable to the project as a whole, because you're coming to the project with fresh eyes, so you can see the errors and assumptions that seasoned contributors have glossed over.

(Copied from [Adrienne Friend](https://github.com/adriennefriend/imposter-syndrome-disclaimer))

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for more details.

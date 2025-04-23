import lume from "lume/mod.ts";
import plugin from "plugin/mod.ts";
import prism from "lume/plugins/prism.ts";
import toc, { linkInsideHeader } from "https://deno.land/x/lume_markdown_plugins@v0.9.0/toc.ts";

import "npm:prismjs@1.29.0/components/prism-typescript.js";

const site = lume();

site.use(plugin({
  theme: "default",
  config: {
    startOnLoad: true,
    themeVariables: {
      primaryColor: "#ff69b4",
      edgeLabelBackground: "#222",
      background: "#111",
    },
  },
}));
site.use(
  prism({
    theme: {
      name: "okaidia",
      cssFile: "/styles.css",
    },
  }),
);
site.use(toc({
  anchor: linkInsideHeader(),
}));

export default site;

import lume from "lume/mod.ts";
import plugin from "plugin/mod.ts";

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

export default site;

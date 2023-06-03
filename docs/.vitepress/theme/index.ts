import Theme from "vitepress/dist/client/theme-default";
import BroUI from "../../../src/entry";
import "vitepress-theme-demoblock/theme/styles/index.css";
//@ts-ignore
import Demo from "vitepress-theme-demoblock/components/Demo.vue";
//@ts-ignore
import DemoBlock from "vitepress-theme-demoblock/components/DemoBlock.vue";

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(BroUI);
    app.component("Demo", Demo);
    app.component("DemoBlock", DemoBlock);
  }
}
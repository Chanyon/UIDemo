import { App } from "vue";
// 统一导入
// import MyButton from "./button/index"
// import SFCButton from "./button/SFCButton.vue";
import BroButton from "./button/TSXButton";

// 单独导出
export { BroButton };

//实现vue插件 install
const components = [BroButton];
export default {
  install(app: App): void {
    for(const component of components) {
      app.component(component.name, component);
    }
  }
}

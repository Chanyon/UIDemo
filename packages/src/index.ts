// import { createApp } from "vue";
import { createApp } from "vue/dist/vue.esm-browser";
import BrownEaredUI from "./entry"

createApp({
  template: `
    <div>
    <BroButton>普通按钮</BroButton>
    <BroButton color="red">普通按钮</BroButton>
    <BroButton color="green">普通按钮</BroButton>
    <BroButton color="blue">普通按钮</BroButton>
    <BroButton color="purple">普通按钮</BroButton>
    </div>
    <div style="margin-top: 10px">
    <BroButton color="purple" round plain icon="edit">EditIcon</BroButton>
    </div>
    <div style="margin-top: 10px">
    <BroButton size="large" color="purple" round plain icon="edit">EditIcon</BroButton>
    </div>
  `
})
.use(BrownEaredUI)
.mount("#app");


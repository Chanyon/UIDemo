import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue';
import vueJsx from "@vitejs/plugin-vue-jsx";
import UnoCss from "./config/unocss"
// 配置导出模块类型
const rollupOptions = {
  external: ["vue","vue-router"],
  output: {
    globals:{
      vue: "Vue",
    },
    extend: true,
  }
}

export default defineConfig({
  plugins: [
    vue(),
    vueJsx({}),
    UnoCss(),
  ],
  // 添加库模式
  build: {
    rollupOptions,
    lib: {
      entry: "./src/entry.ts",
      name: "Brown-EaredUI",
      fileName: "brown-eared-ui",
      // 导出模块格式
      formats: ["es","umd","iife"],
    },
    cssCodeSplit: true,
  }
});
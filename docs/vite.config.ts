import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import UnoCss from "../config/unocss";

export default defineConfig({
  plugins: [
    UnoCss(),
    vueJsx(),
  ],
});
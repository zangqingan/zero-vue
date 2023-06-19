import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path"; // path用到了 @types/node 这个包所以要安装
import EslintPlugin from "vite-plugin-eslint"; // 配置eslint检验范围

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    EslintPlugin({
      include: ["src/**/*.js", "src/**/*.ts", "src/**/*.vue"],
      exclude: ["./node_modules"],
    }),
  ],
  //这里进行配置别名
  resolve: {
    alias: {
      "@": path.resolve("./src"), // @代替./src
      "@api": path.resolve("./src/api"), // @api代替./src/api
      "@components": path.resolve("./src/components"), // @components代替./src/components
      "@views": path.resolve("./src/views"), // @views代替../src/views
      "@utils": path.resolve("./src/utils"), // @utils代替./src/utils
      "@types": path.resolve("./src/types"), // @types代替./src/types
    },
  },
});

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // path用到了 @types/node 这个包所以要安装
import eslintPlugin from 'vite-plugin-eslint' // 配置eslint检验范围
import { viteMockServe } from 'vite-plugin-mock' //使用mock

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      vue(),
      eslintPlugin({
        include: ['src/**/*.js', 'src/**/*.ts', 'src/**/*.vue'],
        exclude: ['./node_modules']
      }),
      // 配置mock
      viteMockServe({
        mockPath: './mock',
        localEnabled: command === 'serve',
        prodEnabled: command !== 'serve' && true,
        // 这样可以控制关闭mock的时候不让mock打包到最终代码内
        injectCode: `
          import { setupProdMockServer } from './mock/mockProdServer';
          setupProdMockServer();
        `
      })
    ],
    //这里进行配置别名
    resolve: {
      alias: {
        '@': path.resolve('./src') // @代替./src
      }
    },
    // 配置反向代理
    server: {
      port: 3000,
      proxy: {
        '/api': {
          target: 'http://localhost:3000', // 后台服务器地址
          changeOrigin: true, // 是否允许不同源
          secure: false, // 支持https
          rewrite: path => path.replace(/^\/api/, '')
        }
      }
    }
  }
})

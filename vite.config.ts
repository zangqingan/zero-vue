import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // path用到了 @types/node 这个包所以要安装
import EslintPlugin from 'vite-plugin-eslint' // 配置eslint检验范围
import { viteMockServe } from 'vite-plugin-mock' //使用mock

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      vue(),
      EslintPlugin({
        include: ['src/**/*.js', 'src/**/*.ts', 'src/**/*.vue'],
        exclude: ['./node_modules']
      }),
      // 配置mock
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve',
        prodEnabled: command !== 'serve' && true,
        // 这样可以控制关闭mock的时候不让mock打包到最终代码内
        injectCode: `
          import { setupProdMockServer } from '../mock/mockProdServer';
          setupProdMockServer();
        `
      })
    ],
    //这里进行配置别名
    resolve: {
      alias: {
        '@': path.resolve('./src'), // @代替./src
        '@api': path.resolve('./src/api'), // @api代替./src/api
        '@components': path.resolve('./src/components'), // @components代替./src/components
        '@views': path.resolve('./src/views'), // @views代替../src/views
        '@utils': path.resolve('./src/utils'), // @utils代替./src/utils
        '@types': path.resolve('./src/types') // @types代替./src/types
      }
    },
    // 配置反向代理
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:5173', // 后台服务器地址
          changeOrigin: true, // 是否允许不同源
          secure: false, // 支持https
          rewrite: path => path.replace(/^\/api/, '/api')
        }
      }
    }
  }
})

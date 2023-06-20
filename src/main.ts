import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // 引入路由
import store from './store' // 引入全局状态管理器pinia

const app = createApp(App)

app.use(router) // 注册路由
app.use(store) // 注册pinia
app.mount('#app')

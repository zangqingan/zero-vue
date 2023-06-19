import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store' // 引入全局状态管理器pinia

const app = createApp(App)

app.use(store) // 注册
app.mount('#app')

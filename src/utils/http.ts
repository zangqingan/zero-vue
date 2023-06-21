// 1.引入axios
import axios from 'axios'

// 2.创建axios实例
const instance = axios.create({ baseURL: import.meta.env.VITE_APP_BASE_API })

// 配置请求拦截器
instance.interceptors.request.use(
  config => {
    // 发送请求前做各种处理
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)
// 配置响应拦截器
instance.interceptors.response.use(
  res => {
    // 对返回信息做各种处理
    return Promise.resolve(res.data)
  },
  error => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)

// 3.导出axios实例
export default instance

// 引入axios实例
import instance from '@utils/http'

// 定义一个获取用户列表接口
export const getUserInfo = () => {
  return instance({
    url: 'system/user/info',
    method: 'get'
  })
}

// 1.引入创建store函数defineStore
import { defineStore } from 'pinia'

// 2.定义store
// defineStore 第一个参数是id，必需且值唯一
const useUserStore = defineStore('user', {
  // state返回一个函数，防止作用域污染
  state: () => {
    return {
      userInfo: {
        name: 'zhangsan',
        age: 23
      },
      token: 'Ssfsdfssf232543sf234521'
    }
  },
  getters: {
    newName: state => state.userInfo.name + 'vip'
  },
  actions: {
    // 更新整个对象
    updateUserInfo(userInfo: { name: string; age: number }) {
      this.userInfo = userInfo
    },
    // 更新对象中某个属性
    updateAge(age: number) {
      this.userInfo.age = age
    },
    // 更新基础数据类型
    updateToken(token: string) {
      this.token = token
    }
  }
})

// 3.导出store
export default useUserStore

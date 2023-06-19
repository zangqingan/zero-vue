import { defineStore } from 'pinia'
import useUserStore from './user'
enum Gender {
  man = '男人',
  woman = '女人'
}
export default defineStore('gender', {
  state: () => {
    return {
      gender: Gender.man
    }
  },
  actions: {
    updateGender() {
      const userStore = useUserStore() // 引用其他store
      if (userStore.userInfo.name !== 'zhangsan') this.gender = Gender.woman
    }
  }
})

<script setup lang="ts">
// 测试pinia是否成功初始化
import useUserStore from '@/store/modules/user' // 引入store
import useGenderStore from '@/store/modules/gender'
import { storeToRefs } from 'pinia'

defineProps<{ msg: string }>()
// 实例化 store state和getters解构并保留响应式
const userStore = useUserStore()
const { userInfo, token, newName } = storeToRefs(userStore)
// actions可以直接解构
const { updateUserInfo, updateAge, updateToken } = userStore

// 修改store用户信息
const handleUserInfo = () => {
  updateUserInfo({ name: 'lisi', age: 24 })
}

const handleUserAge = () => {
  // userInfo是一个ref响应式引用，需通过.value取值
  updateAge(userInfo.value.age + 1)
}

const handleToken = () => {
  updateToken('23234')
}
// 实例化 store
const genderStore = useGenderStore()
const { gender } = storeToRefs(genderStore)
const { updateGender } = genderStore
const handleGender = () => {
  updateGender()
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <hr />
  <div>我是userStore保留响应式解构出来的数据：{{ userInfo }}</div>
  <div>我是token：{{ token }}</div>
  <div>我是新的名字：{{ newName }}</div>
  <hr />
  <button @click="handleUserInfo">更新store中的用户信息</button>
  <button @click="handleUserAge">更新store中的用户信息的年薪信息</button>
  <button @click="handleToken">更新store中的token</button>
  <hr />
  <div>我是userGender中保留响应式解构出来的数据：{{ gender }}</div>
  <button @click="handleGender">更新store中的性别信息</button>
</template>

<style scoped></style>

<template>
  <div>
    <div>home</div>
  </div>
</template>

<script setup>
import { getUserInfo } from '@/api/user/index'

const getList = async () => {
  const res = await getUserInfo()
  console.log('res', res)
}
getList()
</script>

<style lang="scss" scoped></style>

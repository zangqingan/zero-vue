import { defineStore } from 'pinia'
import { ref } from 'vue'

const useArrowStore = defineStore('arrow', () => {
  const arrowType = ref()
  return { arrowType }
})

export default useArrowStore

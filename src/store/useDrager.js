import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('store', () => {
  const open = ref(false)

  const toggleOpen = () => open.value = !open.value
  const closeDrawer = () => open.value = false
  const openDrawer = () => open.value = true

  return {
    open,
    toggleOpen,
    closeDrawer,
    openDrawer
  }
})
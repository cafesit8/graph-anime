<template>
  <Drawer style="background-color: #23252b; height: auto;" v-model:visible="visible" position="top" @hide="onHide"
    :showCloseIcon="false">
    <ul class="w-full text-white flex flex-col justify-center items-center gap-2">
      <li v-for="item in items">
        <RouterLink @click="closeDrawer" :key="item.label" exactActiveClass="text-[#f47521]" :to="item.route"
          class="p-2 text-lg rounded-lg font-semibold text-white/80">
          {{ item.label }}
        </RouterLink>
      </li>
    </ul>
    <button @click="closeDrawer" class="absolute top-5 right-5">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-square-rounded-x">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10 10l4 4m0 -4l-4 4" />
        <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
      </svg>
    </button>
  </Drawer>
</template>

<script>
import Drawer from 'primevue/drawer'
import { useStore } from '../store/useDrager'
import { computed } from 'vue';

export default {
  name: 'DrawerComponent',
  components: {
    Drawer
  },
  setup () {
    const store = useStore()
    const visible = computed(() => store.open)

    const closeDrawer = () => {
      store.closeDrawer()
    }

    const onHide = () => {
      store.closeDrawer()
    }

    return {
      visible,
      closeDrawer,
      onHide
    }
  },
  data () {
    return {
      items: [
        {
          label: 'Home',
          route: '/'
        },
        {
          label: 'Romance',
          route: '/romance'
        },
        {
          label: 'Action',
          route: '/action'
        },
        {
          label: 'Horror',
          route: '/horror'
        }
      ]
    }
  }
}
</script>

<template>
  <header ref="headerComponente" class="fixed w-full py-6 flex justify-between lg:px-10 px-3 z-50 duration-150">
    <nav class="flex items-center gap-7">
      <picture class="block w-36">
        <img class="w-full h-full object-contain" src="/logo.webp" alt="">
      </picture>
      <ul class="flex gap-2">
        <li class="lg:block hidden" v-for="item in items">
          <RouterLink :key="item.label" exactActiveClass="text-[#f47521]" :to="item.route"
            class="p-2 text-lg rounded-lg font-semibold text-white/80">
            {{ item.label }}
          </RouterLink>
        </li>
      </ul>
    </nav>
    <div class="flex items-center gap-3">
      <button class="hover:bg-[#484e5c] p-1 rounded-md duration-150">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-search">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg>
      </button>
      <button @click="toggleOpen" class="lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-square-rounded-chevrons-down">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 9l-3 3l-3 -3" />
          <path d="M15 13l-3 3l-3 -3" />
          <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
        </svg>
      </button>
    </div>
  </header>
</template>

<script>
import { ref } from 'vue'
import { useStore } from '../store/useDrager'

export default {
  name: 'Header',
  setup () {
    const headerComponente = ref(null)
    const { toggleOpen } = useStore()

    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        headerComponente.value?.classList.add('bg-primary')
      } else {
        headerComponente.value?.classList.remove('bg-primary')
      }
    })
    return {
      headerComponente,
      toggleOpen
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
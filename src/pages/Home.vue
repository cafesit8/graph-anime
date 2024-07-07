<template>
  <main class="bg-primary w-full min-h-dvh">
    <InitialHome />
    <Movies />
  </main>
</template>

<script>
import InitialHome from '../sections/home/Initial.vue'
import Movies from '../sections/home/Movies.vue'

export default {
  name: 'Home',
  components: {
    InitialHome,
    Movies
  }
}
</script>
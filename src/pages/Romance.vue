<template>
  <main class="bg-primary w-full min-h-dvh">
    <InitialViewForGenre />
    <AnimesList title="Anime with romance" />
  </main>
</template>

<script>
import InitialViewForGenre from '../sections/genres/Initial.vue'
import AnimesList from '../sections/genres/Animes.vue'

export default {
  name: 'Romance',
  components: {
    InitialViewForGenre,
    AnimesList
  }
}
</script>
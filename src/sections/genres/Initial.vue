<template>
  <div v-if="$apollo.loading" class="relative z-10 w-full h-dvh grid place-content-center">Loading...</div>
  <div v-if="error">{{ error.message }}</div>
  <InitialPresentationPage :getAnimes="getAnimes" />
</template>

<script>
import InitialPresentationPage from '../../components/InitialPresentationPage.vue';
import { getAnimeByGenre } from '../../query/index.js'
import { useRoute } from 'vue-router'

export default {
  name: 'InitialViewForGenre',
  data () {
    return {
      getAnimes: [],
      error: null,
      genre: ""
    }
  },
  created () {
    const { name } = useRoute()
    this.genre = name
  },
  apollo: {
    getAnimes: {
      query: getAnimeByGenre,
      variables () {
        return {
          page: "1",
          perPage: "15",
          genre: this.genre
        }
      },
      result ({ data, error }) {
        if (data) {
          this.getAnimes = [data.Page.media[1]]
        } else {
          this.getAnimes = []
        }
        if (error) {
          this.error = error
        }
      }
    }
  },
  components: {
    InitialPresentationPage
  }
}
</script>
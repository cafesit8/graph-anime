<template>
  <div v-if="$apollo.loading" class="relative z-10 w-full h-[60vh] grid place-content-center">Loading...</div>
  <div v-if="error">{{ error.message }}</div>
  <InitialPresentationPage :getAnimes="getAnimes" />
</template>

<script>
import { getInitialAnime } from '../../query';
import InitialPresentationPage from '../../components/InitialPresentationPage.vue';

export default {
  name: 'InitialHome',
  apollo: {
    getAnimes: {
      query: getInitialAnime,
      variables: {
        perPage: "1",
        //perPage: this.perPage
      },
      result ({ data, error }) {
        if (data) {
          this.getAnimes = data.Page.mediaTrends.map(trend => trend.media)
        } else {
          this.getAnimes = []
        }
        if (error) {
          this.error = error
        }
      }
    }
  },
  data () {
    return {
      getAnimes: [],
      error: null
      //perPage: 5
    }
  },
  components: {
    InitialPresentationPage
  }
}
</script>
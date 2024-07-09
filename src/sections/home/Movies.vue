<template>
  <section class="w-full lg:p-10 p-3">
    <div v-if="$apollo.loading" class="w-full h-full grid place-content-center">Loading...</div>
    <div v-if="error">{{ error.message }}</div>
    <div v-else :class="$apollo.loading ? 'hidden' : ''" class="flex flex-col gap-7">
      <h2 class="lg:text-3xl text-xl font-semibold">Remembering the past</h2>
      <div class="w-full grid lg:[grid-template-columns:repeat(auto-fill,minmax(250px,1fr))] [grid-template-columns:repeat(auto-fill,minmax(130px,1fr))] lg:[grid-auto-rows:400px] [grid-auto-rows:220px] lg:gap-5 gap-3">
        <CardMovie v-for="movie in getMovies" :key="movie?.id" :movie="movie" />
      </div>
    </div>
  </section>
</template>

<script>
import { getAnimeList } from '../../query';
import CardMovie from '../../components/CardMovie.vue';

export default {
  name: 'Movies',
  apollo: {
    getMovies: {
      query: getAnimeList,
      variables: {
        page: "1",
        perPage: "15"
      },
      result ({ data, error }) {
        if (data) {
          this.getMovies = data.Page.media.map(movie => movie);
        } else {
          this.getMovies = [];
        }
        if (error) {
          this.error = error;
        }
      }
    },
  },
  data () {
    return {
      getMovies: [],
      error: null
      //perPage: 5
    }
  },
  components: {
    CardMovie
  }
}
</script>
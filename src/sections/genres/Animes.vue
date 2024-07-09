<template>
  <section class="w-full lg:p-10 p-3">
    <div v-if="$apollo.loading" class="w-full h-full grid place-content-center">Loading...</div>
    <div v-if="error">{{ error.message }}</div>
    <div v-else :class="$apollo.loading ? 'hidden' : ''" class="flex flex-col gap-7">
      <h2 class="lg:text-3xl text-xl font-semibold">{{ title }}</h2>
      <div class="w-full grid lg:[grid-template-columns:repeat(auto-fill,minmax(250px,1fr))] [grid-template-columns:repeat(auto-fill,minmax(130px,1fr))] lg:[grid-auto-rows:400px] [grid-auto-rows:220px] lg:gap-5 gap-3">
        <CardMovie v-for="movie in getMovies" :key="movie?.id" :movie="movie" />
      </div>
    </div>
  </section>
</template>

<script>
import { getAnimeByGenre } from '../../query';
import CardMovie from '../../components/CardMovie.vue';
import { useRoute } from 'vue-router';

export default {
  name: 'AnimesList',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      getAnimes: [],
      error: null,
      genre: null,
    }
  },
  created () {
    const { name } = useRoute()
    this.genre = name
  },
  apollo: {
    getMovies: {
      query: getAnimeByGenre,
      variables () {
        return {
          page: "1",
          perPage: "20",
          genre: this.genre
        }
      },
      skip () {
        return !this.genre;
      },
      result ({ data, error }) {
        if (data) {
          this.getMovies = data.Page.media
        } else {
          this.getMovies = []
        }
        if (error) {
          this.error = error;
        }
      }
    },
  },
  components: {
    CardMovie
  }
}
</script>
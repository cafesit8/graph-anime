<template>
  <article @click="router" class="overflow-hidden relative group cursor-pointer">
    <img :src="movie.coverImage.large" alt="" class="w-full h-full object-cover">
    <div
      class="absolute flex [bottom:-100%] group-hover:bottom-0 duration-150 left-0 w-full h-full to-bottom-0 bg-gradient-to-t from-black">
      <div class="self-end flex justify-between items-center w-full p-3">
        <p class="text-pretty">{{ movie.title.userPreferred }}</p>
        <button class="bg-secondary flex items-center p-2 rounded-full">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"
            class="icon icon-tabler text-white icons-tabler-filled icon-tabler-player-play">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" />
          </svg>
        </button>
      </div>
    </div>
  </article>
</template>

<script>
  export default {
    name: 'CardMovie',
    props: {
      movie: {
        type: Object,
        required: true
      }
    },
    methods: {
      router() {
        this.$router.push(`/${this.movie.id}`)
      }
    }
  }
</script>
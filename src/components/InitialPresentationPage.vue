<template>
  <section class="section-initial w-full h-[60vh] relative px-10">
    <div class="w-full h-full flex items-center" v-for="anime in getAnimes" :key="anime.id">
      <div class="relative z-10 max-w-[50%] flex flex-col gap-5">
        <h1 class="text-5xl font-bold">{{ anime.title.english || anime.title.userPreferred }}</h1>
        <p class="text-base text-white/90 text-balance">{{ cleanDescription(anime.description) }}</p>
        <button @click="onClick" class="bg-secondary flex items-center py-1 px-3 rounded-lg self-baseline">
          Ver más
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler text-white/80 icons-tabler-filled icon-tabler-player-play">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" />
          </svg>
        </button>
      </div>
      <picture class="block w-full h-full absolute left-0 top-0">
        <img class="w-full h-full object-cover" :src="anime.bannerImage" :alt="anime.title.english" />
      </picture>
    </div>
  </section>
</template>

<script>
import YouTube from 'vue3-youtube'

export default {
  name: 'InitialPresentationPage',
  props: {
    getAnimes: {
      type: Array,
      required: true
    }
  },
  methods: {
    cleanDescription (html) {
      const tmp = document.createElement('div');
      tmp.innerHTML = html;
      return tmp.textContent || tmp.innerText || '';
    },
    onClick() {
      this.$router.push("/" + this.getAnimes[0].id)
    }
  },
  components: { YouTube }
}
</script>
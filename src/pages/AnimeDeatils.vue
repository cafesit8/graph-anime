<template>
  <main class="w-full min-h-dvh bg-primary">
    <section class="section-initial min-h-dvh relative flex items-center lg:px-10 px-3 overflow-hidden">
      <YouTube v-if="trailerId" :src="trailerId" ref="youtube" :width="'100%'" :height="'100%'" @ready="onReady"
      :vars="playerVars" style="position: absolute; width: 100%; height: 100%; left: 0; top: 0; object-fit: cover; opacity: 0.3;" />
      <picture v-else class="block w-full h-full absolute left-0 top-0">
        <img class="w-full h-full object-cover lg:opacity-100 opacity-30" v-if="!trailerId" :src="anime.bannerImage"
          :alt="anime.userPreferred">
      </picture>
      <div v-if="Object.keys(anime).length > 0" class="relative z-10 w-full flex justify-between items-center text-white">
        <div class="lg:max-w-[50%] flex flex-col gap-5">
          <h1 class="lg:text-5xl text-xl font-bold">{{ anime.title.english || anime.title.userPreferred }}</h1>
          <p class="lg:text-base text-sm"><span>Genres: </span>{{ anime.genres.join(' | ') }}</p>
          <p class="lg:text-base text-sm text-white/90 text-balance">{{ cleanDescription(anime.description) }}</p>
        </div>
        <div v-if="trailerId">
          <button v-if="!mute" @click="muted" class="bg-black/50 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="icon text-white icon-tabler icons-tabler-outline icon-tabler-volume">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 8a5 5 0 0 1 0 8" />
              <path d="M17.7 5a9 9 0 0 1 0 14" />
              <path
                d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
            </svg>
          </button>
          <button v-if="mute" @click="unMuted" class="bg-black/50 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-volume-3">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
              <path d="M16 10l4 4m0 -4l-4 4" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { useRoute } from 'vue-router'
import { getAnime } from '../query';
import YouTube from 'vue3-youtube'

export default {
  name: 'AnimeDeatils',
  computed: {
    trailerId () {
      return this.getAnimeDetail.trailer?.id
    },
    title() {
      return this.getAnimeDetail.title.english || this.getAnimeDetail.title.userPreferred
    },
    anime() {
      return this.getAnimeDetail
    }
  },
  data () {
    return {
      getAnimeDetail: {},
      error: null,
      id: null,
      mute: false,
      playerVars: {
        controls: 0,
        showinfo: 0,
        rel: 0,
      },
    }
  },
  created () {
    const { params } = useRoute()
    this.id = params.id
  },
  apollo: {
    getAnimeDetail: {
      query: getAnime,
      variables () {
        return {
          mediaId: this.id
        }
      },
      skip () {
        return !this.id;
      },
      result ({ data, error }) {
        if (data) {
          this.getAnimeDetail = data.Media
        } else {
          this.getAnimeDetail = {}
        }
        if (error) {
          this.error = error
        }
      }
    }
  },
  components: { YouTube },
  methods: {
    onReady () {
      this.$refs.youtube.playVideo()
    },
    muted () {
      this.$refs.youtube.mute()
      this.mute = true
    },
    unMuted () {
      this.$refs.youtube.player.unMute()
      this.mute = false
    },
    cleanDescription (html) {
      const tmp = document.createElement('div');
      tmp.innerHTML = html;
      return tmp.textContent || tmp.innerText || '';
    }
  },
}
</script>
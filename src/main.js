import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { createWebHistory, createRouter } from 'vue-router'
import { routes } from './routes/routes'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'
import './style.css'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes
})

const httpLink = createHttpLink({
  uri: 'https://graphql.anilist.co'
})

const cache = new InMemoryCache()

const apolloCliente = new ApolloClient({
  link: httpLink,
  cache
})

const apolloProvider = createApolloProvider({
  defaultClient: apolloCliente
})

app
.use(router)
.use(PrimeVue, { theme: { preset: Aura }})
.use(apolloProvider)
.mount('#app')

<template>
  <Header />
  <DrawerComponent />
  <RouterView />
  <Footer />
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import DrawerComponent from './components/Drawer.vue'

  export default {
    name: 'App',
    components: {
      Header,
      Footer,
      DrawerComponent
    }
  }
</script>

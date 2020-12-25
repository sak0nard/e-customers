<template>
  <div id="app">
    <header class="header">
      <nav-bar></nav-bar>
    </header>
    <div class="section">
      <main class="container">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

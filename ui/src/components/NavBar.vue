<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/"><h1 class="title has-text-white">Brand</h1></router-link>
      <a role="button"
        class="navbar-burger burger"
        :class="{ 'is-active': isOpened }"
        aria-label="menu"
        aria-expanded="isOpened"
        v-on:click="toggleOpen"
        >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu"
         :class="{ 'is-active': isOpened }">
      <div class="navbar-start">
        <router-link class="navbar-item has-text-weight-semibold" to="/">Home</router-link>
        <router-link class="navbar-item has-text-weight-semibold" to="/customers">Customers</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isOpened: false,
    };
  },
  methods: {
    toggleOpen() {
      this.isOpened = !this.isOpened;
    }
  }
}
</script>

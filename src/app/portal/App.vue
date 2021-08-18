<template>
  <div id="app">
    <div class="logo">
      <img v-if="logo.url" :src="logo.url" alt="logo">
      <h1 v-if="logo.text">{{ logo.text }}</h1>
    </div>
    <nav class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <a href="/demo/" class="link-demo">演示平台Demo</a>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'portal-app',
  computed: {
    ...mapState(['logo'])
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  padding: 30px;

  a {
    margin: 0 12px;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  .link-demo{
    margin-left: 48px;
  }
}
.logo{
  display: flex;
  justify-content: center;
  img{
    width: 32px;
  }
  h1{
    margin-left: 12px;
    font-size: 24px;
  }
}
</style>

<template>
  <div class="home">
    <img alt="Vue logo" src="~@/assets/logo.png">
    <p>Vue多页面应用</p>
    <HelloWorld msg="Vue Multiple Page Application"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

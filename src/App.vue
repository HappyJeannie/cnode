<template>
  <div id="app">
    <img src="./assets/logo.png">
    <headnav></headnav>
    <router-view/>
  </div>
</template>

<script>
import headnav from '@/components/header'
export default {
  name: 'App',
  components: {
    headnav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

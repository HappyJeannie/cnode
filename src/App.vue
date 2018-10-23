<template>
  <div id="app">
    <headnav></headnav>
    <router-view/>
    <footbar></footbar>
  </div>
</template>

<script>
import headnav from '@/components/header'
import footbar from '@/components/footer'
import './assets/css/normalize.css'
export default {
  name: 'App',
  components: {
    headnav,
    footbar
  }
}
</script>

<style>
  body{
    background: #e1e1e1;
  }
</style>

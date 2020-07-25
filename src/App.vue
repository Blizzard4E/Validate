<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import './assets/style/Einzbern.css'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}
</style>

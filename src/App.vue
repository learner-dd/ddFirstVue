<template>
  <div id="app">
    <!--<img src="./assets/logo.png"><home-page/>
    <order/>
    <search/>
    <profile/>-->
    <router-view/>

    <footer-guide/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'

export default {
  name: 'App',
  components: {
    FooterGuide,
  }
}
</script>

<style type="stylus" rel="stylesheet/stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './views/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #e9ecef;
  
  .btn.btn-primary {
    background-color: #212529;
    border-color: #212529;
    min-width: 100px;
    min-width: 110px;
    padding: 8px;

    &:focus {
      box-shadow: none;
    }
  }
}
</style>

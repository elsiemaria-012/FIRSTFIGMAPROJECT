<template>
  <div id="app">
     <Navigationbar></Navigationbar>
     <lemon></lemon>
     <Cards></Cards>
     <Footer></Footer> 
     
  </div>
</template>

<script>
import Navigationbar from './components/Navigationbar.vue'
import lemon from './components/lemon.vue';
import Cards from './components/Cards.vue';
import Footer from './components/Footer.vue';





export default {
  name: 'App',
  components: {
    Navigationbar,
    lemon,
    Cards,
    Footer,
  }
}
</script>

<style scoped>
#app {
  background: #E5E5E5;
  
  
}
</style>

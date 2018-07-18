<template>
  <div id="app">
    <Topbar/>
    <b-container style="margin-top: 1em;">
      <CarouselHero/>
      <Apresentacao/>
    </b-container>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CarouselHero from './components/CarouselHero.vue'
import Topbar from './components/Topbar.vue'
import Apresentacao from './components/Apresentacao.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    CarouselHero,
    Topbar,
    Apresentacao
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

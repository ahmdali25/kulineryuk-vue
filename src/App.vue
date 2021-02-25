<template>
  <div>
    <Navbar/>
      <transition name="view">
        <router-view></router-view>
      </transition>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
.view-enter-active, .view-leave-active {
  transition: opacity 0.5s ease-out, transform 0.5s ease;
}
.view-enter-active {
  transition-delay: 0.6s;
}
.view-enter, .view-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.view-enter-to, .view-leave {
  opacity: 1;
  transform: translateX(0px);
}
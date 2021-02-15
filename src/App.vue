<template>
  <NavBar id="navbar"/>
  <Carousel />
  
</template>

<script>
import Carousel from './components/Carousel.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Carousel
  }
}

//Change Nav Bar style on scroll
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("logo").style.width = "20px";
    document.getElementById("titlelogo").style.display = "none"
  } else {
    document.getElementById("navbar").style.padding = "40px 10px";
    document.getElementById("logo").style.width = "30px";
    document.getElementById("titlelogo").style.display = "inline"
  }
}

</script>

<style>
body {
  margin: 0%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

#navbar {
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 40px 10px; /* Large padding which will shrink on scroll (using JS) */
  transition: 0.4s; /* Adds a transition effect when the padding is decreased */
  position: fixed; /* Sticky/fixed navbar */
  width: 100%;
  top: 0; /* At the top */
  z-index: 99;
}
</style>

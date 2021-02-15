<template>
  <NavBar id="navbar"/>
  <Carousel />
  <Categories />
</template>

<script>
import Carousel from './components/Carousel.vue'
import NavBar from './components/NavBar.vue'
import Categories from './components/Categories.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Carousel,
    Categories
  }
}

//Change Nav Bar style on scroll
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop >= 80 || document.documentElement.scrollTop >= 80) {
    document.getElementById("navbar").style.paddingTop = "10px";
    document.getElementById("logo").style.width = "20px";
    document.getElementById("titlelogo").style.display = "none"
  } else {
    document.getElementById("navbar").style.paddingTop = "40px";
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
  text-align: center;
}

#navbar {
  overflow: hidden;
  background-color: #f1f1f1;
  padding-top: 40px; /* Large padding which will shrink on scroll (using JS) */
  transition: 0.4s; /* Adds a transition effect when the padding is decreased */
  position: sticky; /* Sticky/fixed navbar */
  width: 100vw;
  top: 0; /* At the top */
  z-index: 99;
  border-bottom: 5px solid #000;
}
/* 
#carousel {
  width: 100vw;
} */

/* @media only screen and (max-width: 1750px) {
  body {
    background-color: lightblue;
  }
} */

</style>

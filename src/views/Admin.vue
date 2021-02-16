<template>
  <NavBar id="navbar"/>
  <CRUD />
  <Footer id="footer" />
</template>

<script>``
import NavBar from '../components/NavBar.vue'
import CRUD from '../components/CRUD.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    CRUD,
    Footer
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
  font-family: Arial,Helvetica,sans-serif;
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

hr {
  width: 75%;
  border-top: 2px solid #000;
}

#footer {
  width: 100vw
}

</style>
<template>
  <div class="footer-container">
      <a href="https://www.instagram.com/cornerstoreskateco/?hl=en"><img src="../assets/instagram.png" alt=""></a>
      <a href="https://www.facebook.com/cornerstoreskateboards/"><img src="../assets/facebook.png" alt=""></a>
      <a href="https://www.linkedin.com/in/ryan-fanelli/"><img src="../assets/linkedin.png" alt=""></a>
      <a href="https://github.com/illenafnayr"><img src="../assets/github.png" alt=""></a>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.footer-container {
    display: flex;
    justify-content: center;
    margin-top: 2%;
    background-color: #f1f1f1;
}

a {
    margin: 1%;
}

img {
    height: 25px;
    width: auto;
    /* padding-left: 2%;
    padding-right: 2%; */
}

</style>

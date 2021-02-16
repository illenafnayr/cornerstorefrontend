
<template>
<div id="carousel-container">
  <div id="carousel">
    <div class="fade" v-for="i in [currentIndex]" :key="i">
      <img :src="currentImg" />
    </div>
  </div>
  <div class="fb-page" data-href="https://www.facebook.com/cornerstoreskateboards" data-tabs="timeline" data-width="" data-height="525" data-small-header="true" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/cornerstoreskateboards" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/cornerstoreskateboards">Corner Store Skateboards</a></blockquote></div>
</div>

</template>

<script>


export default {
  name: 'Carousel',
  components: {
    // Categories
  },
data() {
    return {
      images: [
        require('../assets/cornerstoreinsta1.jpg'),
        require('../assets/cornerstoreinsta2.jpg'),
        require('../assets/cornerstoreinsta3.jpg'),
        require('../assets/cornerstoreinsta4.jpg'),
        require('../assets/cornerstoreinsta5.jpg')
      ],
      timer: null,
      currentIndex: 0
    };
  },
  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 10000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
}

  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade {
  animation: fadeIn ease 10s;
  width: 100%;
}

@keyframes fadeIn {
0% {opacity:0;}
50% {opacity:1;}
100% {opacity:0;}
}

/* @keyframes fadeOut {
0% {opacity:1;}
100% {opacity:0;}
} */



img {
  height: 525px;
  width:auto;
  border: 1px solid #000;
  border-radius: 2px;
  padding: 1%;
  object-fit: contain;
  width: 98%;
  box-sizing: border-box;
}

#carousel-container {
  display: flex;
  justify-content: center;
  /* border-bottom: 2px solid black; */
  /* width: 65%; */
  margin: 0 auto;

}

#carousel {
  padding-top: 1%;
  /* height: 50vh; */
  width: 50%;
}

.fb-page {
  padding: 1%;
}

/* @media only screen and (max-width: 1750px) {
  #carousel-container {
    padding: .5%
  }
} */

</style>


<template>
<!-- <div id="carousel-container"> -->
  <!-- <vueper-slides id="carousel" fade :touchable="false" :slideRatio="1194/1080" :fixed-height="true"  autoplay>
    <vueper-slide v-for="(slide, i) in slides"
      :key="i"
      :image="slide.image"
    />
  </vueper-slides> -->


<!-- </div> -->
<div id="carousel-container">
  <div id="carousel">
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group>
  </div>
  <!-- <Categories /> -->
</div>

</template>

<script>
// import { VueperSlides, VueperSlide } from 'vueperslides'
// import Categories from '../components/Categories.vue'

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
      this.timer = setInterval(this.next, 6000);
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
.fade-enter-active,
.fade-leave-active {
  transition: all 2s ease;
  overflow: hidden;
  visibility: hidden;
  /* position:fixed; */
  width:100%;
  opacity: 1;
  /* animation: fadeIn ease 1s; */
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

/* @keyframes fadeIn {
0% {opacity:1;}
100% {opacity:0;}
} */



img {
  height:600px;
  border: 1px solid black;
  border-radius: 2px;
  padding: 2%;
  /* width:100% */
}

#carousel-container {
  display: flex;
  justify-content: center;

}

#carousel {
  padding-top: 12.5%;
  height: 50vh;
  width: 50%;
}



</style>

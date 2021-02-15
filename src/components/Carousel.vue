
<template>
<div id="carousel-container">
  <vueper-slides id="carousel" fade :touchable="false" :slideRatio="1194/1080" :fixed-height="true"  autoplay>
    <vueper-slide v-for="(slide, i) in slides"
      :key="i"
      :image="slide.image"
    />
  </vueper-slides>
</div>

</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: 'Carousel',
  props: {
    msg: String
  },
  components: {
    VueperSlides,
    VueperSlide
  },
  data: ()=>({
    slides:[
      {
        image: require('../assets/cornerstoreinsta1.jpg')
      },
      {
        image: require('../assets/cornerstoreinsta2.jpg')
      },
      {
        image: require('../assets/cornerstoreinsta3.jpg')
      },
      {
        image: require('../assets/cornerstoreinsta4.jpg')
      },
      {
        image: require('../assets/cornerstoreinsta5.jpg')
      }
    ]
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#carousel-container {
  display: flex;
  justify-content: center;
}

#carousel {
  padding-top: 12.5%;
  height: 50vh;
  width: 50%;
}

.vueperslide:nth-child(1) {
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 50%
}

.vueperslide:nth-child(2) {
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 50%
}

.vueperslide:nth-child(3) {
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 50%
}

.vueperslide:nth-child(4) {
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 21%
}

.vueperslide:nth-child(5) {
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 50%
}

</style>

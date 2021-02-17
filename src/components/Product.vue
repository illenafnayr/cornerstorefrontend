<template>
<h1>{{categoryName.toUpperCase()}}</h1>
  <div id="container">
    <template v-for="product in products" :key="product.uuid" >
      <div class="productCard" v-if="product.category.name.toLowerCase()===categoryName">
        <span :key="product.category.uuid">{{product.name.toUpperCase()}}</span>
        <img :src="product.imgsrc" :alt="product.name" class="productImg" >
        <!-- <span>${{product.Attributes[0].attributeValues[0].price}}</span> -->
        <button>Add to Cart</button>
      </div>
    </template>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Product',
  data() {
    return {
      products: [],
      categoryName: this.$route.params.name
    }
  },
  mounted() {
    axios
      .get('http://localhost:4321/products')
      .then((response) => {
        this.products = response.data
        console.log(this.products)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container {
  display: flex;
  justify-content: center;
}

.productCard {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 20%;
    border: 1px solid black;
    border-radius: 2px;
    margin: 1%;
    /* justify-content: center; */
    align-items: center;
}

.productImg {
  margin: 1%;
  width: 95%;
}

button {
  width: 30%;
  margin: 2%;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  font-weight: 700;
}

button:hover {
  background-color: #72dbcaa6;
  transition: .5s ease-in-out;
  cursor: pointer;
}

</style>

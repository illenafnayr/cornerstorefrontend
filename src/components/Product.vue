<template>
    <div id="products-container">
      <div v-for="product in products" :key="product.uuid">
        <span v-if="product.category.name.toLowerCase()===categoryName" :key="product.category.uuid">{{product.name}}</span>
        <span v-else></span>
      </div>
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
/* #categories-container{
    width: 100%;
    height: 400px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-family: Arial,Helvetica,sans-serif;
    font-weight: 700;
}

span {
    padding: 1%;
    font-size: 28px;
    color: #444;
}

#card-container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card {
    height: 96%;
    width: 250px;
    box-sizing: border-box;
    border: 1px solid #444;
    border-radius: 2px;
    margin-left: 2%;
    margin-right: 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #444;
}

.cardImg {
    width: 96%;
    box-sizing: border-box;
    border: 1px solid #444;
    border-radius: 2px;
} */

</style>

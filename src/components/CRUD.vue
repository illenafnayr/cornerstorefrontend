<template>
<!-- <h1>{{categoryName.toUpperCase()}}</h1> -->
    <div>
        <label for="category">Select Category: </label>
        <select form="productForm" id="category" v-model="form.categoryUuid">
            <option v-for="category in categories" :key="category.uuid" :value="category.uuid">{{category.name.toUpperCase()}}</option>
        </select>
        <form id="productForm" v-on:submit.prevent="submit()">
            <label for="name">Name: </label>
            <input type="text" name="name" id="name" v-model="form.name"><br>

            <label for="imgsrc">Image Source: </label>
            <input type="text" name="imgsrc" id="imgsrc" v-model="form.imgsrc"><br>

            <label for="description">Description: </label>
            <input type="text" name="description" id="description" v-model="form.description"><br>

            <input type="submit" value="Create Product">
        </form>

    </div>
    <div id="container">
        <div class="productCard" v-for="product in products" :key="product.uuid">
            <span :key="product.category.uuid">{{product.name.toUpperCase()}}</span>
            <img :src="product.imgsrc" :alt="product.name" class="productImg" >
            <!-- <span>${{product.Attributes[0].attributeValues[0].price}}</span> -->
            <button>Edit</button>
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
      categories: [],
      form: {
          categoryUuid: '',
          name: '',
          imgsrc: '',
          description: ''
      }
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
      axios
        .get('http://localhost:4321/categories')
        .then((response) => {
            this.categories = response.data
            console.log(this.categories)
        })
  },
  methods: {
      submit() {
          axios
            .post('http://localhost:4321/products', this.form)
            .then((response) => {
            console.log(response)
            // .catch((error) => {
            //     console.log(error)  
            // })  
          })
    }
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

form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20%;
    margin: 0 auto;
}

</style>

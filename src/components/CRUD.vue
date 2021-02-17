<template>
    <div>
        <h3>Create Category</h3>
        <form id="categoryForm" v-on:submit.prevent="createCategory()">
            <label for="name">Name: </label>
            <input type="text" name="name" id="name" v-model="categoryForm.name"><br>

            <label for="imgsrc">Image Source</label>
            <input type="text" name="imgsrc" id="imgsrc" v-model="categoryForm.imgsrc"><br>

            <input type="submit" value="Create Crategory">
        </form>
        <br>
        <h4>Delete Category</h4>
        <form id="deleteCategory" v-on:submit.prevent="deleteCategory()">
            <select form="deleteCategory" id="deleteCategory" v-model="categoryUuid">
                <option v-for="category in categories" :key="category.uuid" :value="category.uuid">{{category.name.toUpperCase()}}</option>
            </select><br>
            <input type="submit" value="Delete Category">    
        </form>
        

    </div>
    <hr>
    <div>
        <h3>Add New Product</h3>
        <label for="category">Select Category: </label>
        <select form="productForm" id="category" v-model="productForm.categoryUuid">
            <option v-for="category in categories" :key="category.uuid" :value="category.uuid">{{category.name.toUpperCase()}}</option>
        </select>
        <form id="productForm" v-on:submit.prevent="createProduct()">
            <label for="name">Name: </label>
            <input type="text" name="name" id="name" v-model="productForm.name"><br>

            <label for="imgsrc">Image Source: </label>
            <input type="text" name="imgsrc" id="imgsrc" v-model="productForm.imgsrc"><br>

            <label for="description">Description: </label>
            <input type="text" name="description" id="description" v-model="productForm.description"><br>

            <input type="submit" value="Add Product">
        </form>
    </div>
    <hr>
    <div id="container">
        <div class="productCard" v-for="product in products" :key="product.uuid">
            <span :key="product.category.uuid">{{product.name.toUpperCase()}}</span>
            <img :src="product.imgsrc" :alt="product.name" class="productImg" >
            <!-- <span>${{product.Attributes[0].attributeValues[0].price}}</span> -->
            <button>Edit</button>
            <button v-on:click="deleteProduct(product.uuid)">Delete</button>
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
      productForm: {
          categoryUuid: '',
          name: '',
          imgsrc: '',
          description: ''
      },
      productUuid: '',
      categoryUuid: '',
      categoryForm: {
          name: '',
          imgsrc: ''
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
      createProduct() {
          axios
            .post('http://localhost:4321/products', this.productForm)
            .then((response) => {
            console.log(response)
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
          })
    },
    deleteProduct(uuid){
        console.log(uuid)
        axios.delete(`http://localhost:4321/products/${uuid}`).then(() => {
            console.log('product was deleted')
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
        })
    },
    createCategory () {
        axios
            .post('http://localhost:4321/categories', this.categoryForm)
            .then((response) => {
                console.log(response)
                axios
                    .get('http://localhost:4321/products')
                    .then((response) => {
                        console.log(response.data)
                        this.products = response.data
                    })
                axios
                    .get('http://localhost:4321/categories')
                    .then((response) => {
                        console.log(response.data)
                        this.categories = response.data
                    })
            })
    },
    deleteCategory(){
        axios.delete(`http://localhost:4321/categories/${this.categoryUuid}`).then(() => {
            console.log('Category was deleted')
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
        })
    },

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

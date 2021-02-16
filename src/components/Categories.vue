<template>
  <div id="categories-container">
    <span>SHOP</span>
      <div id="card-container">
          <router-link :to="{ name: 'Category', params: { name: category.name.toLowerCase() }}" :href="'/categories/' + category.name.toLowerCase()" v-for="category in categories" :key="category.id" class="card">
              <div >
                  <h2>
                    {{category.name.toUpperCase()}}
                  </h2>
                  <img :src="category.imgsrc" :alt="category.name" class="cardImg" >
              </div>
          </router-link>
      </div>
  </div>
  <router-view :key="$route.path"></router-view>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Categories',
  data() {
    return {
      categories: []
    }
  },
  mounted() {
    axios
      .get('http://localhost:4321/categories')
      .then((response) => {
        this.categories = response.data
        console.log(this.categories)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#categories-container{
    width: 100%;
    height: 400px;
    box-sizing: border-box;
    /* border: 2px solid red; */
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
    /* width: 65%; */
    /* border-top: 2px solid black; */
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
}

</style>

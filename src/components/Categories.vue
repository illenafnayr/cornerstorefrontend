<template>
    <div id="categories-container">
             <span>SHOP</span>
        <div id="card-container">
            <div class="card" v-for="category in categories" :key="category.id">
                <h1>
                    {{category.name.toUpperCase()}}
                </h1>
                <img :src="category.imgsrc" :alt="category.name" class="cardImg" >
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Categories',
  props: {
    msg: String
  },
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
    width: 65%;
    border-top: 1px solid black;
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
    border: 2px solid black;
    margin-left: 1%;
    margin-right: 1%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.cardImg {
    width: 96%;
    box-sizing: border-box;
    border: 1px solid black;
    border-radius: 2px;
}

</style>

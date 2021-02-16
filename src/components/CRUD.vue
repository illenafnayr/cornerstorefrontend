<template>
    <div id="crud-container">
        CRUD
    </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'Crud',
//   data() {
//     return {
//       categories: []
//     }
//   },
//   mounted() {
//     axios
//       .get('http://localhost:4321/categories')
//       .then((response) => {
//         this.categories = response.data
//         console.log(this.categories)
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//   }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#crud-container{
    width: 100%;
    height: 400px;
    box-sizing: border-box;
    border: 2px solid red;
}
</style>

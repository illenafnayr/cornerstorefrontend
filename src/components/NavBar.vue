<template>
  <div class="nav-container">
    <img id="logo" src="../assets/logoicon.png" alt="Corner Store Skateboards Co." >
    <img id="titlelogo" src="../assets/titlelogo.png" alt="Corner Store Skateboards Co.">
    <nav>
        <ul>
            <li id="home" class="inactive"> <a href="/">HOME</a></li>
            <li id="shop" class="inactive"><a href="/categories">SHOP</a></li>
            <li id="film" class="inactive"><a href="/film">FILM</a></li>
            <li id="contact" class="inactive"><a href="/contact">CONTACT</a></li>
        </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.nav-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#logo{
    height: auto;
    width: 30px;
}

#logo:hover {
    cursor: pointer;
    -webkit-filter: contrast(40%);
        /* Safari 6.0 - 9.0 */
    filter: contrast(40%);
}

#titlelogo {
    width: 200px;
}

#titlelogo:hover {
    cursor: pointer;
    -webkit-filter: contrast(30%);
        /* Safari 6.0 - 9.0 */
    filter: contrast(30%);
}

ul {
    padding: 0;
    width: 50vw;
    
}

.inactive {
    display: inline;
    font-size: 10px;
    font-family: Arial,Helvetica,sans-serif;
    font-weight: 700;
    margin: 5%;
    border-bottom: 2px solid #444;
}

.inactive:hover {
    border-bottom: 2px solid;
    color: rgb(97, 97, 97);
}

/* .active {
    display: inline;
    font-size: 10px;
    font-family: Arial,Helvetica,sans-serif;
    font-weight: 700;
    margin: 5%;
    border-bottom: 2px solid red;
} */

a {
    text-decoration: none;
    color: #444;
}

a:hover {
    color: rgb(97, 97, 97);
}

/* a:active {
    color: red;
} */
</style>

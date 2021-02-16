<template>
<div id="videos-container">

    <div class="video-div">
        <h5>"Smile" Jimmy Lake</h5>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rhwpOcSa6zA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div class="video-div">
        <h5>SMILE!</h5>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/TSeKkOOeYm8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div class="video-div">
        <h5>Cam CS welcome part</h5>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/GYosnEEEIU4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div class="video-div">
        <h5>Cornerstore's Superette</h5>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/yk3i6w5wEJs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div class="video-div">
        <h5>"Superette" Teaser</h5>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/cQNsnD7wOn0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div class="video-div">
        <h5>Corner Store Collective 2017 Fall edit</h5>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/T64NsWmTk7c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div class="video-div">
        <h5>Sticky CS Welcom Master</h5>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/2gWBrisWRck" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div class="video-div">
        <h5>"Thanks" Cornerstore Section</h5>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/npgi3Wf41Go" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div class="video-div">
        <h5>Caleb Kaiser Welcome Part!!!</h5>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/qv-Q9_C-c-E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div class="video-div">
        <h5>Corner Store Skate Co. Promo #2</h5>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/u2j3-iKKDCk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div class="video-div">
        <h5>Shawn Macmillan Welcome to CornerStore</h5>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ynQTht7MDUc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div class="video-div">
        <h5>Corner Store Skate Co. Promo</h5>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/oDytL4xdsIg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'Videos'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#videos-container {
    display: flex;
    overflow-wrap: normal;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-top: 2%;
    width: 70%;
    background-color: rgb(238, 238, 238);
}

.video-div {
    border: 1px solid black;
    box-sizing: border-box;
    border-radius: 2px;
    margin: 2%;
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1%;
}

iframe {
    width: 100%;
}

</style>
<template>
  <div class="contents">
    <div class="container">
      <hr class="boundary">
      <h2 class="title">Art Gallery</h2>
      <div class="gallery">
        <div v-for="i in 8" class="gallery-works">
          <div class="gallery-works__wrap">
            <img src="/01.png" alt="">
          </div>
          <p class="gallery-works__word">word: p5.js, l-system</p>
        </div>
      </div>
      <div class="gallery-works__pager">
        1...2...3...4
      </div>
    </div>
  </div>
</template>

<style scoped>
  .contents {
    padding-bottom: 100px;
    background: #f5f5f5;
  }
  .container{
    width:800px;
    margin: 0 auto;
  }

  .boundary {
    width: 10%;
    margin: 0 auto;
  }

  .title {
    text-align: center;
    font-size: 20px;
    padding: 20px;
    font-weight: 300;
  }

  .gallery {
    display: flex;
    -webkit-justify-content: space-between; /* Safari */
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
  }

  .gallery-works {
    min-width: 45%;
    max-width: 45%;
    margin-bottom: 40px;
  }

  .gallery-works__wrap {
    position: relative;
    border-top: solid 2px;
    border-bottom: solid 2px;
    padding: 20px;
  }

  .gallery-works__wrap:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 30px;
    height: 7px;
    background: #000;
    transition: all .5s ease-out;
  }

  .gallery-works__wrap:after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 30px;
    height: 7px;
    background: #000;
    transition: all .5s ease-out;
  }

  .gallery-works__wrap:hover::before {
    width: 100%;
    background: #f5f5f5;
  }

  .gallery-works__wrap:hover::after {
    width: 100%;
    background: #f5f5f5;
  }

  .gallery-works__wrap img {
    width: 85%;
    display: block;
    margin: 0 auto;
  }

  .gallery-works__word {
    padding-top: 10px;
  }

  .gallery-works__pager {
    text-align: right;
    font-size: 20px;
  }

</style>
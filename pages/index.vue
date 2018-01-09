<template>
  <div class="contents">
    <nav class="sidebar">
      <ul>
        <li>SystemGallery</li>
        <li>ArtGellery</li>
        <li>Skill</li>
        <li>Contact</li>
      </ul>
    </nav>
    <system-gallery></system-gallery>
    <art-gallery></art-gallery>
    <div class="skill">
      <hr class="boundary">
      <h2 class="title">Skill</h2>
      <p class="skill__summary">JavaScript: Vue.js, Nuxt.js, P5.js </p>
      <p class="skill__summary">Node.js: Express.js, Adonis.js</p>
      <p class="skill__summary">PHP: Laravel</p>
    </div>
    <div class="contact">
      <hr class="boundary">
      <div class="container">
        <h2 class="title">Contact</h2>
        <span>chanu-ni-renraku@gmail.com</span>
      </div>
    </div>
  </div>
</template>
<script>
  import ArtGallery from '~/components/ArtGallery'
  import SystemGallery from '~/components/SystemGallery'
  export default{
    components: {
      ArtGallery,
      SystemGallery
    },
    methods: {}
  }
</script>

<style scoped>
  .sidebar{
    left:5%;
    top:7%;
    position: fixed;
    z-index: 999;
  }
  .sidebar ul li{
    list-style: none;
    font-size:20px;
    padding:20px;
  }
  .contents {
    font-family: 'Lato', sans-serif;
  }

  .boundary{
    width:10%;
    margin:0 auto;
  }

  .skill{
    width:100%;
    background:#f5f5f5;
    padding-bottom:50px;
  }
  .skill .title{
    text-align: center;
    padding:20px;
    font-weight:300;
  }
  .skill__summary{
    text-align: center;
    padding:20px;
    font-weight:300;
    font-size:18px;
  }

  .contact {
    background: #f5f5f5;
    text-align: center;
    padding-bottom:50px;
  }
  .contact .title{
    padding:20px;
    font-weight:300;
  }
  .container{
    width:960px;
    margin:0 auto;
  }
</style>
<template>
  <div class="contents">
    <dot-line></dot-line>
    <nav class="sidebar">
      <ul>
        <li><a href="#" v-scroll-to="'#me'">Me</a></li>
        <li><a href="" v-scroll-to="'#systems'">SystemGallery</a></li>
        <li><a href="" v-scroll-to="'#art'">ArtGellery</a></li>
        <li><a href="" v-scroll-to="'#skill'">Skill</a></li>
        <li><a href="" v-scroll-to="'#contact'">Contact</a></li>
        <li><a href="">Blog</a></li>
      </ul>
    </nav>
    <div class="me" id="me">
      <div class="container">
        <hr class="boundary">
        <h2 class="title">Me</h2>
        <p>
          フロントからバックエンドまで好き嫌いは特になく、いろいろやりたい。
        </p>
        <p>
          最近、processing と three.js を始めたので、綺麗なものを作りたい所存。
        </p>
      </div>
    </div>
    <system-gallery></system-gallery>
    <art-gallery></art-gallery>
    <div class="skill" id="skill">
      <div class="container">
        <hr class="boundary">
        <h2 class="title">Skill</h2>
        <p class="skill__summary">JavaScript: Vue.js, Nuxt.js, P5.js </p>
        <p class="skill__summary">Node.js: Express.js, Adonis.js</p>
        <p class="skill__summary">PHP: Laravel</p>
        <p class="skill__summary">Preprocessor: Scss</p>
        <p class="skill__summary">Template: Pug</p>
        <p class="skill__summary">Version control: Git</p>
      </div>
    </div>
    <div class="contact" id="contact">
      <hr class="boundary">
      <div class="container">
        <h2 class="title">Contact</h2>
        <span>chanu.ni.renraku@gmail.com</span>
      </div>
    </div>
  </div>
</template>
<script>
  import DotLine from '~/components/DotLine'
  import ArtGallery from '~/components/ArtGallery'
  import SystemGallery from '~/components/SystemGallery'
  export default{
    components: {
      ArtGallery,
      SystemGallery,
      DotLine
    },
    methods: {}
  }
</script>

<style scoped>
  .sidebar {
    left: 5%;
    top: 7%;
    position: fixed;
    z-index: 999;
  }

  .sidebar ul li {
    list-style: none;
    font-size: 20px;
    padding: 20px;
  }
  .sidebar a{
    color:#000;
    text-decoration: none;
    position: relative;
  }
  .sidebar a:after{
    content:"";
    position: absolute;
    bottom:-3px;
    left:0;
    width:100%;
    height:1px;
    background: #000;
    transform:scaleX(0);
    transition: all ease-out 0.3s;
  }
  .sidebar a:hover:after{
    transform: scaleX(1);
  }

  .contents {
    font-family: 'Lato', sans-serif;
  }

  .boundary {
    width: 10%;
    margin: 0 auto;
  }

  .me {
    background: #f5f5f5;
    padding-top:20px;
    padding-bottom:50px;
  }
  .me .container{
    width: 600px;
    margin: 0 auto;
    padding:20px;
  }
  .me .title{
    padding:20px;
    text-align: center;
    font-weight: 300;
  }

  .me p {
    font-weight: 300;
    text-align: center;
  }

  .skill {
    width: 100%;
    background: #f5f5f5;
    padding-bottom: 100px;
  }

  .skill .container {
    width: 60%;
    margin: 0 auto;
  }

  .skill .title {
    text-align: center;
    padding: 20px;
    font-weight: 300;
  }

  .skill__summary {
    text-align: center;
    padding: 5px;
    font-weight: 300;
    font-size: 18px;
  }

  .contact {
    background: #f5f5f5;
    text-align: center;
    padding-bottom: 100px;
  }

  .contact .title {
    padding: 20px;
    font-weight: 300;
  }

  .container {
    width: 960px;
    margin: 0 auto;
  }
</style>
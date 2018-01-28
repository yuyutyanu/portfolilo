<template>
  <div class="contents" id="systems">
    <div class="systems">
      <hr class="boundary">
      <h2 class="title">SystemGallery</h2>
      <div class="system-works-wrap">

        <div class="system-works" v-for="system in systems" @click="system.isVisible = !system.isVisible">
          <a :href="system.url"target="_blank">
            <img class="system-works__img" :src="`/systems/${system.name}`" alt="">
          </a>
        </div>
        <!--<transition name="fade">-->
        <!--<div class="system-works__description system-description" v-for="system in systems" v-if="system.isVisible"-->
        <!--@click="system.isVisible = !system.isVisible">-->
        <!--<div class="system-description__img-wrap">-->
        <!--<img :src="`/systems/${system.name}`" alt="">-->
        <!--</div>-->
        <!--<p class="system-description__text">{{system.description}}</p>-->
        <!--<p>url: hogehoge.jp</p>-->
        <!--</div>-->
        <!--</transition>-->
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        systems: [
          {
            name: 'job.png',
            isVisible: false,
            description: 'テキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト',
            url: 'https://job-test-dev.herokuapp.com/'
          },
          {name: 'field.png', isVisible: false, description: 'テキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト', url: ''},
          {name: 'postoru.png', isVisible: false, description: 'テキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト', url: ''},
          {name: 'apo.png', isVisible: false, description: 'テキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト', url: ''}
        ]
      }
    }
  }
</script>

<style scoped>
  .boundary {
    width: 10%;
    margin: 0 auto;
  }

  .contents {
    background: #f5f5f5;
    padding-bottom: 100px;
  }

  .systems {
    padding: 20px 0px;
    width: 100%;
  }

  .systems .title {
    text-align: center;
    padding: 20px;
    font-size: 20px;
    font-weight: 300;
  }

  .system-works-wrap {
    display: flex;
    flex-wrap: wrap;
    -webkit-justify-content: space-around; /* Safari */
    justify-content: space-around;
    max-width: 700px;
    margin: 0 auto;
    position: relative;
  }
  .system-works a{
    display: block;
    height: 100%;
    width: 100%;
  }

  .system-works {
    width: 45%;
    height: 300px;
    border-radius: 2px;
    position: relative;
    background: url(/job.png) no-repeat center;
    background-size: cover;
    box-shadow: 0 0 20px gray;
    padding: 20px;
  }

  .system-works:first-child {
    margin-bottom: 70px;
  }

  .system-works__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }

  .system-works__description {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    height: 80%;
    font-size: 14px;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.2);
  }

  .system-description__img-wrap {
    width: 50%;
    height: 50%;
    margin: 0 auto;
    border-radius: 2px;
  }

  .system-description__img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2px;
  }

  .system-description__text {
    margin: 30px;
    padding: 20px;
    border-radius: 2px;
  }

  @media (max-width:480px){
    .system-works {
      box-shadow: 0 0 2px gray;
      padding:0;
    }
  }
</style>
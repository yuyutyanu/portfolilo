<template>
  <div class="contents" id="systems">
    <div class="systems">
      <hr class="boundary">
      <h2 class="title">SystemGallery</h2>
      <div class="system-works-wrap">

        <div class="system-works" v-for="system in systems">
          <a :href="system.url" target="_blank">
            <img class="system-works__img" :src="`/systems/${system.name}`" alt="">
          </a>
          <p class="system-works__description">{{system.description}}</p>
        </div>
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
            description: '社員全体の勤怠情報を管理するWebアプリケーション',
            url: 'https://job-test-dev.herokuapp.com/'
          },
          {
            name: 'field.png',
            description: '複数人での同時編集可能なマークダウン形式のエディタ',
            url: 'https://field-md.herokuapp.com'
          },
          {
            name: 'postoru.png',
            description: '作成中：匿名で誰でも好きに投稿できるブログ',
            url: ''},
          {
            name: 'noimage.jpg',
            description: '作成中：身近な人にアポイントを取る手間を省くアプリ',
            url: ''
          }
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

  .system-works a {
    display: block;
    height: 75%;
    width: 100%;
  }

  .system-works {
    width: 45%;
    height: 300px;
    border-radius: 2px;
    position: relative;
    background: url(/job.png) no-repeat center;
    background-size: cover;
    box-shadow: 0 0 5px gray;
    padding: 20px;
  }
  .system-works__description{
    margin-top:10px;
    font-size:14px;
    padding:10px;
    font-weight:300;
  }

  .system-works:first-child {
    margin-bottom: 70px;
  }

  .system-works__img {
    width: 100%;
    height:100%;
    object-fit: cover;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }


  @media (max-width: 480px) {
    .system-works {
      box-shadow: 0 0 2px gray;
      padding: 0;
    }
    .system-works__description{
      margin:0;
      font-size:12px;
    }
  }
</style>
<template>
  <div class="contents">
    <div class="systems">
      <hr class="boundary">
      <h2 class="title">SystemGallery</h2>
      <div class="system-works-wrap">
        <div class="system-works" v-for="i in 4">
          <!--<div class="system-works__description">-->
          <!--<p>サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト</p>-->
          <!--</div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .boundary {
    width: 10%;
    margin: 0 auto;
  }

  .contents {
    background: #f5f5f5;
    position: relative;
    padding-bottom:100px;
  }

  .systems {
    padding:20px 0px;
    width: 100%;
    position: relative;
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
    max-width: 600px;
    margin: 0 auto;
    position: relative;
  }
  .system-works-wrap:before{
    content:"";
    position: absolute;
    top:-30px;
    right:-40px;
    width:40px;
    height:50%;
    border-top:solid 1px;
    border-right:solid 1px;
    border-radius:2px;
  }
  .system-works-wrap:after{
    content:"";
    position: absolute;
    bottom:-30px;
    left:-40px;
    width:40px;
    height:50%;
    border-bottom:solid 1px;
    border-left:solid 1px;
    border-radius:2px;
  }

  .system-works {
    width: 45%;
    height: 300px;
    border-radius: 2px;
    position: relative;
    background: url(/01.png) no-repeat center;
    background-size: cover;
  }
  .system-works:first-child{
    margin-bottom: 70px;
  }

  .system-works__description {
    font-size: 14px;
    border-top: none;
    padding: 10px;
  }

</style>
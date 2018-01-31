<template>
  <div class="monitor">
    <div class="contents">
      <div class="concept">
        　「気持ちよく働く」を大切に
      </div>
    </div>
  </div>
</template>

<style scoped>
  .monitor{
    width:85%;
    height:85vh;
    margin: 40px auto;
    position: relative;
    border:solid 10px #000;
    border-radius:20px;
  }
  .monitor:before{
    content:" ";
    height:30px;
    width:300px;
    background: #000;
    border:solid 1px;
    position: absolute;
    left:50%;
    bottom:-70px;
    transform:translate(-50%, 0);
    z-index: -1;
  }
  .monitor:after{
    content:" ";
    border: 120px solid transparent;
    border-bottom:120px solid #000;
    position: absolute;
    left:50%;
    bottom:-70px;
    transform:translate(-50%, 0);
    z-index: -1;
  }
  .contents {
    width: 100%;
    height:100%;
    background: url(/art/posterv1.jpeg);
    background-size: 100%;
    position: relative;
  }

  .concept {
    position: absolute;
    left: 50%;
    top: 65%;
    transform: translate(-50%, 0);
    font-size: 20px;
  }
</style>
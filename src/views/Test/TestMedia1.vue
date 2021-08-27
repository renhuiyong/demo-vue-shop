<!--
  测试媒体查询 手机端 宽度适配
-->
<template>
  <div id="div0">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "TestMedia1"
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#div0 {
  width 100%
  height 500px
}

#div0 div {
  float left
  height 100px

}

@media screen and (min-device-width: 400px) {
  #div0 div {
    width 33.3%
  }

  #div0 div:nth-child(1) {
    background-color red
  }

  #div0 div:nth-child(2) {
    background-color salmon
  }

  #div0 div:nth-child(3) {
    background-color firebrick
  }
}

@media screen and (min-device-width: 200px) and (max-device-width: 399px) {
  #div0 div {
    width 50%
  }

  #div0 div:nth-child(1) {
    background-color red
  }

  #div0 div:nth-child(2) {
    background-color salmon
  }

  #div0 div:nth-child(3) {
    background-color firebrick
  }
}

@media screen and (min-device-width: 100px)and (max-device-width: 199px) {
  #div0 div {
    width 100%
  }

  #div0 div:nth-child(1) {
    background-color red
  }

  #div0 div:nth-child(2) {
    background-color salmon
  }

  #div0 div:nth-child(3) {
    background-color firebrick
  }
}

</style>

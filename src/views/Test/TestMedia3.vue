<!--
  测试媒体查询 手机端 宽度适配 style media
-->
<template>
  <div id="div3">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "TestMedia3"
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#div3 {
  width 100%
  height 500px
}

#div3 div {
  float left
  height 100px
}

#div3 div:nth-child(1) {
  background-color red
}

#div3 div:nth-child(2) {
  background-color salmon
}

#div3 div:nth-child(3) {
  background-color firebrick
}
</style>


<style lang="stylus" rel="stylesheet/stylus" media="(min-device-width: 200px) and (max-device-width: 399px) ">
#div3 div {
  width 33.3%
}
</style>
<style lang="stylus" rel="stylesheet/stylus" media="(min-device-width: 400px) and (max-device-width:599px)">
#div3 div {
  width 100%
}
</style>
<!-- 3 -->
<!--<link href="xxx.css" rel="stylesheet" media="(min-device-width: 400px) and (max-device-width:599px)">-->

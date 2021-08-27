<!--
  测试媒体查询 浏览器宽度适配
-->
<template>
  <div id="div1">
  </div>
</template>

<script>
export default {
  name: "TestMedia"
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#div1 {
  height 150px
  width 200px
}

@media screen and (min-width: 500px) and (max-width: 700px) {
  #div1 {
    background red
  }
}

@media screen and (min-width: 701px) {
  #div1 {
    background darkcyan
  }
}
</style>

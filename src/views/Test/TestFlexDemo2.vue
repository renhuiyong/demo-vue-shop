<!--
  用 flex 设置样式对齐
-->
<template>
  <div id="demoDiv2">
    <div>
      <label>姓名:</label>
      <input type="text">
    </div>
    <div>
      <label>请输入密码:</label>
      <input type="text">
    </div>
    <div>
      <label>请再次输入密码:</label>
      <input type="text">
    </div>
  </div>
</template>

<script>
export default {
  name: "TestFlexDemo2"
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#demoDiv2 {
  display flex
  flex-direction column
}

#demoDiv2 div {
  display flex
  //margin-top 10px
  //height 30px
  align-items flex-start
  flex 0 0 50px
}

#demoDiv2 div label {
  flex 0 0 220px
  text-align right
}


</style>

<!--
  flex 嵌套设置
-->
<template>
  <div id="demoDiv0">
    <label>姓名</label>
    <input type="text">
    <label>go</label>
  </div>
</template>

<script>
export default {
  name: "TestFlexDemo1"
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
* {
  padding 0
  margin 0
}

#demoDiv0 {
  width 250px
  display flex
  border 1px solid #dcdcdc
}

#demoDiv0 label {
  flex 1
  background-color #f5f5f5
  font-family "Adobe Kaiti Std"
  text-align center
}

#demoDiv0 label:nth-child(3) {
  flex 0 0 25px //单独改变
}

#demoDiv0 input {
  border none
  outline none
}
</style>

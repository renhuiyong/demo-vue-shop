<template>
  <div id="div1">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </div>
</template>

<script>
export default {
  name: "TestFlex1"
}
</script>

<!--
flex-direction  row|row-reverse|column|column-reverse
flex-wrap       nowrap|wrap|wrap-reverse
flex-flow       flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。.box{flex-flow:||;}
justify-content justify-content:flex-start|flex-end|center|space-between|space-around
align-items     flex-start|flex-end|center|baseline|stretch
align-content   flex-start|flex-end|center|space-between|space-around|stretch   stretch（默认值）

-->
<style lang="stylus" rel="stylesheet/stylus">
#div1 {
  background-color salmon
  //width 500px
  width 380px
  //width 400px
  display flex
  //flex-direction row  //flex-direction属性决定主轴的方向（即项目的排列方向）。
  //flex-wrap wrap //默认情况下，项目都排在一条线（又称”轴线”）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。
  flex-flow row wrap // 方向｜如何换行 -> 已水平的方向换行
  justify-content space-around //剩余空间如何填充显示
  //align-items   flex-start
  align-content center
  height 500px
}

#div1 div {
  width 100px
  height 100px
  background-color slateblue
  //margin-top 10px
}
</style>

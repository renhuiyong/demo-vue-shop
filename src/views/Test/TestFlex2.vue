<template>
  <div id="div2">
    <div>1</div>
    <div>2</div>
  </div>
</template>

<script>
export default {
  name: "TestFlex2"
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
#div2 {
  background-color salmon
  width 400px
  height 500px
  display flex
}

#div2 div {
  width 200px
  height 200px
  background-color #7e8c8d
  //flex-basis 30%  //设置弹性盒子伸缩基准值 设置后width失效
  //  flex-grow 1   //设置弹性盒子的扩展比率 剩余总数 / 份数 然后根据份数相加扩展
  //flex-shrink 1   //设置弹性盒子的缩小比率 剩余总数 / 份数 然后根据份数相加缩小
  //flex            //flex-grow flex-shrink flex-basis 的缩写
}
#div2 div:nth-child(1){
  //flex-basis 300px
  //flex-grow 2
  //flex-shrink 1
  flex 2 1 300px
}
#div2 div:nth-child(2){
  //flex-basis 300px
  //flex-grow 2
  //flex-shrink 3
  flex 2 3 300px
}
</style>

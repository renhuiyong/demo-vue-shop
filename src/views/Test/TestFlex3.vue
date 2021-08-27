<template>
  <div id="flexDiv3">
    <div>1</div>
    <div>2</div>
  </div>
</template>

<script>
export default {
  name: "TestFlex3"
}
</script>

<!--
  简写
  flex:auto  -> flex: 1 1 auto
  flex:none  -> flex: 0 0 auto
  flex:0%    -> flex: 1 1 0%
  flex:100px -> flex: 1 1 100px
  flex:1     -> flex: 1 1 0%
-->
<style lang="stylus" rel="stylesheet/stylus">
#flexDiv3 {
  background-color salmon
  width 400px
  height 500px
  display flex
}

#flexDiv3 div {
  width 100px
  height 200px
  background-color #7e8c8d
  flex none
}
</style>

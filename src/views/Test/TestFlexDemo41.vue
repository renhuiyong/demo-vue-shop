<!--
  自适应 flex
-->
<template>
  <div id="demoDiv4">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
</template>

<script>
export default {
  name: "TestFlexDemo41",
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#demoDiv4 {
  display flex
}

#demoDiv4 div:nth-child(1) {
  background-color slateblue
  flex 0 0 50px
}

#demoDiv4 div:nth-child(2) {
  background-color salmon
  flex 1 1 auto //auto
}

#demoDiv4 div:nth-child(3) {
  background-color slateblue
  flex 0 0 50px
}

@media screen and (min-device-width: 400px) and (max-device-width: 500px) {
  #demoDiv4 div:nth-child(2) {
    background-color skyblue
  }
}
</style>

<!--
  响应式布局
-->
<template>
  <div id="layout">
    <div id="top"></div>
    <div id="main">
      <div>
        <li>分类1</li>
        <li>分类2</li>
        <li>分类3</li>
        <li>分类4</li>
        <li>分类5</li>
        <li>分类6</li>
      </div>
      <div>
        <li>图片</li>
        <li>图片</li>
        <li>图片</li>
        <li>图片</li>
        <li>图片</li>
        <li>图片</li>
        <li>图片</li>
        <li>图片</li>
        <li>图片</li>
        <li>图片</li>
        <li>图片</li>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "TestFlexDemoLayout1",
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@media screen and (min-device-width: 1000px) {
  #layout {
    display flex
    flex-direction column
    width 80%
    margin 0 auto
  }

  #top {
    width 100%
    //margin 0 auto
    background-color yellow
    //height 50px
    flex 0 0 50px
  }

  #main {
    flex 0 0 100%
    display flex
    flex-direction row
  }

  #main div:first-child {
    flex 0 0 10%
    background-color white
    list-style-type none
    display flex
    flex-wrap wrap
    border-left 1px solid gainsboro
    border-right 1px solid gainsboro
  }

  #main div:first-child li {
    flex 0 0 100%
    height 40px
    line-height 40px
    text-align center
    border-bottom 1px solid gainsboro

  }

  #main div:nth-child(2) {
    flex 0 0 90%
    background-color white
    list-style-type none
    display flex
    flex-wrap wrap
    justify-content space-around
  }

  #main div:nth-child(2) li {
    flex 0 0 30%
    height 120px
    text-align center
    border-bottom 1px solid gainsboro
    background-color yellow
    margin-top 10px
  }

}


@media screen and (min-device-width: 400px) and (max-device-width: 600px) {
  #layout {
    display flex
    flex-direction column
    width 100%
    margin 0 auto
  }

  #top {
    width 100%
    //margin 0 auto
    background-color yellow
    //height 50px
    flex 0 0 50px
  }

  #main {
    flex 0 0 100%
    display flex
    flex-direction row
    flex-wrap wrap
  }

  #main div:first-child {
    flex 0 0 100%
    background-color white
    list-style-type none
    display flex
    flex-wrap wrap
    border-left 1px solid gainsboro
    border-right 1px solid gainsboro
    align-content flex-start
  }

  #main div:first-child li {
    flex 0 0 30%
    height 40px
    line-height 40px
    text-align center
    border-bottom 1px solid gainsboro

  }

  #main div:nth-child(2) {
    flex 0 0 100%
    background-color white
    list-style-type none
    display flex
    flex-wrap wrap
    justify-content space-around
  }

  #main div:nth-child(2) li {
    flex 0 0 30%
    height 120px
    text-align center
    border-bottom 1px solid gainsboro
    background-color yellow
    margin-top 10px
  }

}
</style>

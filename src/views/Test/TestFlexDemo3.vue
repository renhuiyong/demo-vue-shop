<!--
  rem使用方法
  跟随设备宽度大小改变字体基本大小
-->
<template>
  <div>
    123
  </div>
</template>

<script>
export default {
  name: "TestFlexDemo3",
  methods: {
    c() {
      let w = document.documentElement.clientWidth; //获取设备宽度
      let n = (20 * (w / 320) > 40 ? 40 + 'px' : 20 * (w / 320) + 'px') //基础大小 宽度 / 基础宽度
      document.documentElement.style.fontSize = n
    }
  },
  mounted() {
    window.addEventListener('load', this.c)
    window.addEventListener('resize', this.c)

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
html {
  font-size 30px
}

div {
  font-size 1rem
}
</style>

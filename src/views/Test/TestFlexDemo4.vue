<!--
  自适应 flex
-->
<template>
  <div>

  </div>
</template>

<script>
export default {
  name: "TestFlexDemo4",
  mounted() {
    this.redirect()
  },
  methods: {
    redirect() {
      let userAgent = navigator.userAgent.toLowerCase()
      let device = /ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/;
      if (device.test(userAgent)) {
        //跳转到移动端
        this.$router.replace('/demo41')
      } else {
        //跳转到pc端
        this.$router.replace('/demo42')
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>

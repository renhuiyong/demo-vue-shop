<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide'
// import {reqFoodCategorys} from "@/api";

export default {
  name: 'App',
  components: {
    FooterGuide
  },
  mounted() {
    this.getAddress();
    // reqFoodCategorys().then(response=>{
    //   console.log(response.data)
    // })
    // this.$store.dispatch('getAddress')
  },
  methods: {
    ...mapActions(['getAddress'])
  },

}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../static/css/reset.css"
@import "http://at.alicdn.com/t/font_518606_6676bmcalnrhehfr.css"

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //margin-top: 60px;
}
</style>

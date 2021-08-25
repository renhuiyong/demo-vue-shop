<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name">
      <template v-slot:left>
         <span class="header_search">
          <i class="iconfont icon-sousuo"></i>
        </span>
      </template>
      <template v-slot:right>
         <span class="header_login">
          <span class="header_login_text">登录|注册</span>
         </span>
      </template>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="categorysArr.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key="index">
              <div class="food_container">
                <img src="./images/nav/7.jpg">
                <!-- <img :src="baseImageUrl + category.image_url">-->
              </div>
              <span>{{ category.title }}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <img v-else src="./images/msite_back.svg" alt="back">
    </nav>
    <!--首页附近商家-->
    <ShopList/>
  </section>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import Swiper from "swiper";
import HeaderTop from "@/components/HeaderTop/HeaderTop";
import ShopList from "@/components/ShopList/ShopList";

export default {
  name: 'Home',
  data() {
    return {
      baseImageUrl: 'https://fuss10.ele.com'
    }
  },
  mounted() {
    this.getCategorys();
    this.getShops();
  },
  methods: {
    ...mapActions(['getCategorys','getShops'])
  },
  watch: {
    categorys() {
      // setTimeout(()=>{
      //   new Swiper('.swiper-container', {
      //     direction: 'vertical', // 垂直切换选项
      //     loop: true, // 循环模式选项
      //     // 如果需要分页器
      //     pagination: {
      //       el: '.swiper-pagination',
      //     },
      //   })
      // },100)
      this.$nextTick(()=>{
          new Swiper('.swiper-container', {
            direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
      })
    }
  },
  components: {
    HeaderTop,
    ShopList
  },
  computed: {
    ...mapState(['address', 'categorys']),
    categorysArr() {
      const {categorys} = this
      const arr = [];
      let minArr = [];
      categorys.forEach(c => {
        if (minArr.length === 8) {
          minArr = []
        }
        if (minArr.length === 0) {
          arr.push(minArr)
        }
        minArr.push(c)
      })
      return arr
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"

.msite //首页
  width 100%

  .header
    background-color #02a774
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 45px

    .header_search
      position absolute
      left 15px
      top 50%
      transform translateY(-50%)
      width 10%
      height 50%

      .icon-sousuo
        font-size 25px
        color #fff

    .header_title
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 50%
      color #fff
      text-align center

      .header_title_text
        font-size 20px
        color #fff
        display block

    .header_login
      font-size 14px
      color #fff
      position absolute
      right 15px
      top 50%
      transform translateY(-50%)

      .header_login_text
        color #fff

  .msite_nav
    bottom-border-1px(#e4e4e4)
    margin-top 45px
    height 200px
    background #fff

    .swiper-container
      width 100%
      height 100%

      .swiper-wrapper
        width 100%
        height 100%

        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap

          .link_to_food
            width 25%

            .food_container
              display block
              width 100%
              text-align center
              padding-bottom 10px
              font-size 0

              img
                display inline-block
                width 50px
                height 50px

            span
              display block
              width 100%
              text-align center
              font-size 13px
              color #666

      .swiper-pagination
        > span.swiper-pagination-bullet-active
          background #02a774

</style>

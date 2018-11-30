<template>
  <div>
    <div class="banner" @click="handleClickBanner">
      <img class="banner-img" :src="bannerImg">
      <div class="banner-info">
        <div class="banner-titile">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe662;</span>
          <span>{{this.gallaryImgs.length}}</span>
        </div>
      </div>
    </div>
    <FadeAnimation>
      <CommonGallary
        @close="handleGallaryClose"
        :gallaryImgs="gallaryImgs"
        v-show="showGallary"
      >
      </CommonGallary>
    </FadeAnimation>
  </div>
</template>
<script>
import CommonGallary from 'common/gallary/gallary.vue'
import FadeAnimation from 'common/fade/fade.vue'
export default {
  name: 'Banner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array,
    list: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleClickBanner () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  }
}
</script>
<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      color #cacaca
      display flex
      position absolute
      right 0
      bottom 0
      left 0
      line-height .6rem
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
      .banner-titile
        flex 1
        font-size .32rem
      .banner-number
        margin-top .14rem
        line-height .32rem
        height .32rem
        border-radius .2rem
        padding 0 .4rem
        background rgba(0,0,0,.8)
        .banner-icon
          font-size .24rem
</style>

<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide
          v-for="(item, index) in gallaryImgs"
          :key="index"
        >
          <img class="swiper-img gallary-img" :src="item">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CommonGallary',
  props: {
    gallaryImgs: Array
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .container >>> .swiper-container
     overflow inherit
  .container
    z-index 1
    display flex
    position fixed
    flex-direction column
    justify-content center
    left 0rem
    right 0rem
    top 0rem
    bottom 0rem
    background #000
    .wrapper
      width 100%
      height 0
      padding-bottom 68.57%
      background #ffffff
      .swiper-pagination
        bottom -1rem
        color #fff
      .gallary-img
        width 100%
</style>

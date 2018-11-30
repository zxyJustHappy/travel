<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item in weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="img-title">{{ item.title }}</p>
          <p class="img-price">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .title
    margin-top .2rem
    line-height .8rem
    background #ccc
    text-indent .2rem
  .item
    margin-bottom .1rem
    .item-img-wrapper
      overflow hidden
      height 0
      padding-bottom 37.09%
      .item-img
        width 100%
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .img-title
        line-height .48rem
        font-size .28rem
        ellipsis()
      .img-price
        line-height .42rem
        font-size .24rem
</style>

<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link tag="li"
          class="item border-bottom"
          v-for="item in recommendList"
          :key="item.id"
          :to="'/detail/' + item.id"
      >
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="img-title">{{ item.title }}</p>
          <p class="img-price">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .title
    line-height .8rem
    background #ccc
    text-indent .2rem
  .item
    display flex
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .img-title
        line-height .54rem
        font-size .44rem
        ellipsis()
      .img-price
        line-height .44rem
        font-size .32rem
        ellipsis()
      .item-button
        margin-top .1rem
        background #ff9300
        padding 0 .2rem
        border-radius .06rem
</style>

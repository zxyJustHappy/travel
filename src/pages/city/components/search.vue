<template>
  <div>
    <div class="search">
      <input class="search-input"
             type="text"
             placeholder="输入城市名或拼音"
             v-model="keyword"
      >
    </div>
    <div v-show="keyword" class="search-content" ref="search">
      <ul>
        <li class="search-item border-bottom"
            v-for="item in list"
            :key="item.id"
            @click="handleCityClick(item.name)"
        >
          {{ item.name }}
        </li>
        <li class="search-item border-bottom" v-show="hasList">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  props: {
    cities: Object
  },
  name: 'CitySearch',
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  methods: {
    handleCityClick (city) {
      this.$store.dispatch('changeCity', city)
      this.$router.push('/')
    }
  },
  computed: {
    hasList () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return false
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 ||
            value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .search
    height .72rem
    padding 0 .1rem
    background $bgColor
    .search-input
      box-sizing border-box
      width 100%
      height .62rem
      line-height .62rem
      text-align center
      padding 0 .1rem
      color #666
      border-radius .06rem
  .search-content
    z-index 1
    overflow hidden
    position absolute
    left 0
    right 0rem
    bottom 0rem
    top 1.58rem
    background-color #eee
   .search-item
      line-height .62rem
      padding-left .2rem
      color #666
</style>

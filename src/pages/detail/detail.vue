<template>
  <div>
    <DetailBanner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
      :list="list"
    ></DetailBanner>
    <DetailHeader></DetailHeader>
    <div class="content">
      <DetailList :list="list"></DetailList>
    </div>
  </div>
</template>
<script>
import DetailBanner from './components/banner.vue'
import DetailHeader from './components/header.vue'
import DetailList from './components/list.vue'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: [],
      lastId: ''
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json?id=' + this.$route.params.id).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    this.lastId = this.$route.params.id
    this.getDetailInfo()
  },
  activated () {
    if (this.lastId !== this.$route.params.id) {
      this.lastId = this.$route.params.id
      this.getDetailInfo()
    }
  }
}
</script>
<style lang="stylus" scoped>
  .content
    height 30rem
</style>

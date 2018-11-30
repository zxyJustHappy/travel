// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 移动端css库
import 'styles/reset.css'
// 在移动端会出现边框变大,引入该文件使其正常
import 'styles/border.css'
// 引入iconfont的css
import 'styles/iconfont.css'
// 先npm install fastClick --save引入
// 然后在手动输入(作用:移动端某些终端会延迟300ms点击事件)
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false
// 同上fastClick都需手动输入
fastClick.attach(document.body)
/* eslint-disable no-new */
Vue.use(VueAwesomeSwiper)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

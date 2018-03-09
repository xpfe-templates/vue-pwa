/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2018-03-09 11:55:28
 * @modify date 2018-03-09 11:55:28
 * @desc [入口文件]
*/

import Vue from 'vue'
import App from './App'
import router from '@/router'
import store from '@/store'
import 'normalize.css/normalize.css' // normalize.css
import 'xp-reset.css' // reset.css
import '@/assets/css/index.css' // 全局预设样式
import '@/components' // 引入全局组件
import * as filters from '@/utils/filters'

// 注册全局filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false // 取消启动时的提示

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
})

/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2017-06-06 03:44:28
 * @modify date 2017-06-06 03:44:28
 * @desc [路由方法]
*/

import Vue from 'vue'
import Router from 'vue-router'

// 按需加载
const _import = file => () => import('@/views/' + file + '.vue').then(m => m.default)
Vue.use(Router)

export const routsMap = [
  { path: '/', component: _import('index/index') },
]

export default new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: routsMap
})

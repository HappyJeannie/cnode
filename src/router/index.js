import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/page/postList'
import DetailPage from '@/page/postDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'postList',
      component: HomePage
    },
    {
      path: '/detail',
      name: 'postDetail',
      component: DetailPage
    }
  ]
})

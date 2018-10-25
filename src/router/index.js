import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/page/postList'
import DetailPage from '@/page/postDetail'
import User from '@/page/user.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'postList',
      component: HomePage
    },
    {
      path: '/detail/:id',
      name: 'postDetail',
      component: DetailPage
    },
    {
      path: '/user/:name',
      name: 'user',
      component: User
    }
  ]
})

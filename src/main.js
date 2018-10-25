// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import './assets/css/base.css'

Vue.use(Vuex)
Vue.prototype.$http = axios
Vue.config.productionTip = false

var store = new Vuex.Store({
  state: {
    num: 1
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

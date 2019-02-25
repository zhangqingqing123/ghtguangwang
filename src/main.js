// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ProtoTypeAPI from './API/apiServer.js'
import store from './store'
import axios from 'axios'
Vue.use(ElementUI);

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://dep.site.api.ghtccs.com'
//axios.defaults.baseURL = 'http://172.29.0.172:8080/ghtccs-admin'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
//axios.defaults.headers['Access-Control-Allow-Origin'] = '*'
Vue.prototype.axios = axios

import "babel-polyfill"
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css'
import './styles/global.scss';

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import httpHandler from './utils/http';
import './utils/corefx.vue'
import axios from 'axios';
import Moment from 'moment';


Vue.prototype.$axios = axios
Vue.prototype.$http = httpHandler
Vue.prototype.moment = Moment

router.beforeEach((to, from, next) => {
  NProgress.start()
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next()
})
router.afterEach(() => {
  NProgress.done()
})


Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// import aa from "./js/common.js"
// console.log(aa)
// import app from "./components/app.vue"
// import Vue from " vue/dist/vue.js ";
import Vue from "vue"
import router from './router'
import store from './store'
// import "./css/common.css"

// import elementUi from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(elementUi)

import vueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(vueAxios,axios)

new Vue({
  el:"#root",
  router,
  store,
  template:"<app />",
  components: {
      app: resolve => require(['./components/app.vue'], resolve)
  }
})
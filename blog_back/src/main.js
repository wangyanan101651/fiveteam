
// import aa from "./js/common.js"
// console.log(aa)
// import app from "./components/app.vue"
// import Vue from " vue/dist/vue.js ";
import Vue from "vue"
import "./css/common.css"
import store from './store'
import router from './router'
new Vue({
  el:"#root",
  template:"<app />",
  store,
  router,
  components: {
      app: resolve => require(['./components/app.vue'], resolve)
  }
})
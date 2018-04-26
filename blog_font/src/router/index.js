import vueRouter from "vue-router"

import Vue from "vue"
Vue.use(vueRouter)


let index=resolve => require(['@/components/index.vue'], resolve)



export default new vueRouter({
   routes:[
     {
       path:"/",
       component:index,
       redirect: "/index"
     },
     {
      path:"/index",
      component:index
     }
   ]
})
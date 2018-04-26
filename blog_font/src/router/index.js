import vueRouter from "vue-router"

import Vue from "vue"
Vue.use(vueRouter)



import IndexBar from '@/components/index.vue'
import Loading from '@/components/loading.vue'
import IndexBar2 from '@/components/index2.vue'

export default new vueRouter({
   routes:[
     {
       path:"/",
       component:IndexBar,
       redirect: "/index"
     },
     {
      path:"/index",
      component:IndexBar
     },{
            path:'/loading',
            component:Loading
        },{
             path:'/index2',
            component:IndexBar2
        }
   ]
})
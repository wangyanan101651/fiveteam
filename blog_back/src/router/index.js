import vueRouter from 'vue-router'

import Vue from 'vue'

Vue.use(vueRouter)

let Login = resolve => require(['../components/login.vue'],resolve)
export default new vueRouter({
    routes:[
        {
            path:'/',
            component:Login,
            redirect:'/login'
        },
        {
            path:'/login',
            component:Login
        }
    ]
})
import vue from 'vue'
import router from 'vue-router'
import Login from '../components/Login'
import Back from '../components/main/Back'
import BackMain from '../components/main/BackMain'
import Addone from '../components/main/Addone'
import Addtwo from '../components/main/Addtwo'
import List from '../components/main/List'
import Amend__class from '../components/main/Amend__class'
import Add_article from '../components/article/Add_article'
import Api_add from '../components/jiekou/Api_add'
import Api_list from '../components/jiekou/Api_list'
import Bianji from '../components/jiekou/Bianji'
vue.use(router)
export default new router({
    routes: [
        {
            path: '/',
            component: Login,
            redirect: '/login'
        },
        {
            path: '/login',
            component: Login
        },
        {
            path:'/back',
            component:Back,
            children:[
                {
                    path:'main',
                    component:BackMain
                },
                {
                    path:'add_one_class',
                    component:Addone
                },{
                    path:'add_two_class',
                    component:Addtwo
                },{
                    path:'class_list',
                    component:List
                },{
                    path:'amend_class',
                    component:Amend__class
                },{
                    path:'add_article',
                    component:Add_article
                },{
                    path:'api_add',
                    component:Api_add
                },{
                    path:'api_list',
                    component:Api_list
                },{
                    path:'bianji/:id', // 动态路由片段
                    component:Bianji
                }
            ]
        }
    ]
})
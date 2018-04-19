import vue from 'vue'
import router from 'vue-router'
import Login from '../components/Login'
import Back from '../components/main/Back'
import BackMain from '../components/main/BackMain'
import Addone from '../components/main/Addone'
import Addtwo from '../components/main/Addtwo'
import List from '../components/main/List'
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
                    path:'/class_list',
                    component:List
                }
            ]
        }
    ]
})
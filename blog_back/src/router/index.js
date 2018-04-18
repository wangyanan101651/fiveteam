import vue from 'vue'
import router from 'vue-router'
import Login from '../components/Login'

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
        }
    ]
})
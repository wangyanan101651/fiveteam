import Kk from '../components/Common/Kk/Kk.jsx'
import Loadable from 'react-loadable'//路由的懒加载，进行分块
import Home from '../components/Home/Home.jsx'
import Buy from '../components/Buy'
import Bout from '../components/Bout/Bout.jsx'
import Mine from '../components/Mine/Mine.jsx'

// const Homes=Loadable({
//     loader:Home,
//     loading:Kk
// })
// const Buys=Loadable({
//     loader:Buy,
//     loading:Kk
// })
// const Buyouts=Loadable({
//     loader:Buyout,
//     loading:Kk
// })
// const Mines=Loadable({
//     loader:Mine,
//     loading:Kk
// })

export const data={
    nav:[
        {
            text:'首页',
            to:'/'
        },{
            text:'买车',
            to:'/buy'
        },{
            text:'卖车',
            to:'/bout'
        },{
            text:'我的',
            to:'/mine'
        }
    ],
    route_view:[
        {
            path:'/',
            component:Home
        },
        {
            path:'/buy',
            component:Buy
        },{
            path:'/bout',
            component:Bout
        },
        {
            path:'/mine',
            component:Mine
        }
    ]
}
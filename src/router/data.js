import Kk from '../components/Common/Kk/Kk.jsx'
import Loadable from 'react-loadable'//路由的懒加载，进行分块
import Home from '../components/Home/Home.jsx'
import Buy from '../components/Buy'
import Bout from '../components/Bout/Bout.jsx'
import Mine from '../components/Mine/Mine.jsx'
import Car from '../components/Car/Car.jsx'
import Car_selling from '../components/Car_selling/Car_selling.jsx'
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
            text:'城市1',
            to:'/buy'
        },{
            text:'城市2',
            to:'/bout'
        },{
            text:'买车',
            to:'/car'
        },
        {   
            text:'卖车',
            to:'/car_selling'
        },
        {
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
        },{
            path:'/car',
            component:Car
        },{
            path:'/car_selling',
            component:Car_selling
        }
    ]
}
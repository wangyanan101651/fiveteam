import Home from '../components/Home'
import BuyCar from '../components/BuyCar'
import SellCar from '../components/SellCar'
import Mine from '../components/Mine'
import CityList from '../components/CityList'
import Cards from '../components/Cards'


export const ROUTER_MAP = {
  NAV : [
    {
      title: '首页',
      to: '/',
      active: 'active'
    },
    {
      title: '买车',
      to: '/buycar',
      active: 'active'
    },
    {
      title: '卖车',
      to: '/sellcar',
      active: 'active'
    },
    {
      title: '我的',
      to: '/mine',
      active: 'active'
    }
  ],
  ROUTER_VIEW: [
    {
      path:'/',
      component: Home
    },
    {
      path:'/buycar',
      component: BuyCar
    },
    {
      path:'/sellcar',
      component: SellCar
    },
    {
      path:'/mine',
      component: Mine
    },
    {
      path:'/citylist',
      component: CityList
    },
    {
      path:'/cards',
      component: Cards
    }
  ]
}

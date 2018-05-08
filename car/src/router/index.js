import React,{ Component } from 'react';
// import city from '../components/city.jsx';
// import home from '../components/home.jsx';
import Home from '../views/home';
import Catagary from '../views/Catagary';
import Detail from '../views/detail';
import Index from '../views/index';
import Mine from '../views/mine';
import Cart from '../views/cart';
import City from '../views/city';
import Upcity from '../views/Upcity';
import Brand from '../views/brand';
import Price from '../views/price';
import Sort from '../views/sort';
import Dress from '../views/dress';
let router = {
    routes: [
       
        {
            path: '/detail',
            component: Detail,
            exact: true
        },
        {
            path: '/catagary',
            component: Catagary
        },
        {
            path: '/city',
            component: City
        },
        {
            path: '/upcity',
            component: Upcity
        },
        {
            path:"/index",
            component: Index,
            children:[
                {
                    path:"/index/home",
                    component: Home
                },
                {
                    path:"/index/catagory",
                    component: Catagary
                },
                {
                    path:"/index/mine",
                    component: Mine
                },
                {
                    path:"/index/cart",
                    component: Cart,
                    children:[
                         {
                            path:"/index/cart/brand",
                            component: Brand
                         },
                         {
                            path:"/index/cart/sort",
                            component: Sort
                         },
                         {
                            path:"/index/cart/dress",
                            component: Dress
                         },
                         {
                            path:"/index/cart/price",
                            component: Price
                         },
                    ]
                }
            ]
        }
    ]
}
export default router;
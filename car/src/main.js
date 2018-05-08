import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Switch,Redirect } from 'react-router-dom'
//config router
// //call react dom to render root
import RouteWrapper from './components/RouteWrapper';
import router from './router/index'
import {Provider} from 'react-redux'
import store from './store/store'
ReactDOM.render(
         <Provider store={store}>
            <BrowserRouter>
                    <Switch>
                        <Redirect exact from='/' to="/index/home" />
                        <RouteWrapper routes={router.routes}/>
                    </Switch>
            </BrowserRouter>
        </Provider>,
document.querySelector('#root'))
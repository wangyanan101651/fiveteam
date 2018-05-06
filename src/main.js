
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import App from './App';
import mock from './mock'
import {BrowserRouter as Router} from 'react-router-dom'
import './assets/fonts/iconfont.css'
import {Provider} from 'react-redux'
import store from './store'
mock()
ReactDom.render(
  <Provider store={store}>  
   <Router>  
    <App />
   </Router> 
   </Provider>  
    ,
  document.getElementById('root')
);
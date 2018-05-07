import React, { Component } from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import './static/style.css'
import mock from './mock/mock'
import { Provider } from 'react-redux'
import createdStoreConfig from './store'
import axios from 'axios'
import AxiosMockAdater from 'axios-mock-adapter'
// import './static/fonts2/iconfont'

mock()
const store = createdStoreConfig()

ReactDom.render(
  <Provider store = {createdStoreConfig()}>
    <Router>
      <App />
      </Router>
  </Provider>,
  document.getElementById('root')
);
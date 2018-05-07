import React, { Component } from 'react';
import './BuyCar.css'
import Sort from './Sort'
import Brand from './Brand'
import Price from './Price'
import Screen from './Screen'

// import {ROUTER_MAP}from '../../router/routerMap'
// console.log(ROUTER_MAP)
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom'


const className = 'BuyCar'
class BuyCar extends Component {

  constructor(){
    super()
  }

  render () {
    const { match} = this.props
    return (
        <Router>
      <div className = {className}>
        <div className= 'buy'>
          <div>
            <span>北京</span>   
              <span><input type="text"/></span>  
              <span>搜索</span>
            </div>
        </div>
        <div className = 'centerbuy'>
          <NavLink to = {`${match.url}/sort`}> 排序 </NavLink>
          <NavLink to = {`${match.url}/brand`}> 品牌 </NavLink>
          <NavLink to = {`${match.url}/price`}> 价格 </NavLink>
          <NavLink to = {`${match.url}/screen`}> 筛选 </NavLink>
        </div>
        <div className = 'bottombuy'>
          <Route path={`${match.url}/sort`} component={Sort}/>
          <Route path={`${match.url}/brand`} component={Brand}/>
          <Route path={`${match.url}/price`} component={Price}/>
          <Route path={`${match.url}/screen`} component={Screen}/>
          
          <Route exact path={match.url} render={() => (
              <Redirect to={`${match.url}/sort`}/> //字符串
            )}/>
        </div>
      </div>
        </Router>
    )
  }
}

export default BuyCar

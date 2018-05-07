import React, { Component } from 'react';
import './Header.css'

const className = 'Header'
class Header extends Component {
  goback(){
    const {history} = this.props
    history.go(-1)
  }
  render () {
    // const {children} = this.props
    return (
      <div className = {className}>
        <div className= 'header'>
          <span onClick = {this.goback.bind(this)}>返回</span>   
          <span>|</span>  
          <span>选择城市</span>
        </div>
      </div>
    )
  }
}

export default Header

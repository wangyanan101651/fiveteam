import React, { Component } from 'react';
import './Home.css'

const className = 'Home'
class Home extends Component {
  chang(){
    const {history} = this.props;
    history.push('/citylist')
  }
  render () {
    return (
      <div className = {className}>
        <div><span onClick = {this.chang.bind(this)}>北京市</span></div>
      </div>
    )
  }
}

export default Home
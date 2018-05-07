import React, { Component } from 'react';
import './BuyCar.css'

const className = 'BuyCar'
class BuyCar extends Component {
  render () {
    // const {children} = this.props
    return (
      <div className = {className}>
        BuyCar
        {/* {children} */}
      </div>
    )
  }
}

export default BuyCar

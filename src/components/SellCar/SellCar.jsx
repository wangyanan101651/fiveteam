import React, { Component } from 'react';
import './SellCar.css'

const className = 'SellCar'
class SellCar extends Component {
  render () {
    // const {children} = this.props
    return (
      <div className = {className}>
        SellCar
        {/* {children} */}
      </div>
    )
  }
}

export default SellCar

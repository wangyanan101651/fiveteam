import React, { Component } from 'react';
import './Mine.css'

const className = 'Mine'
class Mine extends Component {
  render () {
    // const {children} = this.props
    return (
      <div className = {className}>
        Mine
        {/* {children} */}
      </div>
    )
  }
}

export default Mine

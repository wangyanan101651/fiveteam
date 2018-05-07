import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Main.css'

const className = 'Main'
class Main extends Component {
  render () {
    const {children} = this.props
    return (
      <div className = {className}>
          {children}
      </div>
    )
  }
}


export default Main

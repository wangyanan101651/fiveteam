import React, { Component } from 'react';
import './FooterItem.css'

const className = 'footer-item'
class FooterItem extends Component {
  render () {
    const {title} = this.props
    return (
      <div className = {className}>
        {title}
      </div>
    )
  }
}

export default FooterItem

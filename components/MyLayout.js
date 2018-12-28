import React, { Component } from 'react'
import Header from './Header'

class Layout extends Component {
  render () {
    const layoutStyle = {
      margin: 20,
      padding: 20,
      border: '1px solid #DDD'
    }

    return (
      <div style={layoutStyle}>
        <Header />
        {this.props.children}
      </div>
    )
  }
}

export default Layout

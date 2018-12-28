import React, { Component } from 'react'
import Link from 'next/link'

class Header extends Component {
  render () {
    return (
      <div>
        <Link href='/'>
          <a style={{ marginRight: 15 }}>Home</a>
        </Link>
        <Link href='/about'>
          <a style={{ marginRight: 15 }}>About</a>
        </Link>
        <Link href={{ pathname: '/about', query: { firstName: 'matt', lastName: 'pilcher' } }}>
          <button>With url params</button>
        </Link>
      </div>
    )
  }
}

export default Header

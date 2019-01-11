import React, { Component } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

import Layout from '../components/MyLayout'
// In the <Link> element, we have used another prop called “as”. That's the URL which we need to show on the browser. The URL your app sees is mentioned in the “href” prop.

class Index extends Component {

  static async getInitialProps() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()

    console.log(`Show data fetched. Count: ${data.length}`)

    return {
      shows: data
    }
  }

  render () {
    console.log(this.props)
    return (
      <Layout>
        <h1>Home Page</h1>
        <hr />
        <ul>
          {this.props.shows.map(({show}) => (
            <li key={show.id}>
              <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                <a>{show.name}</a>
              </Link>
            </li>
          ))}
        </ul>

        {/* Scoped css rules will have no impact on anything other than the components - not even child components */}
        {/* CSS rules have no effect on elements inside of a child component. - alternatively you can use global selectors - https://github.com/zeit/styled-jsx#one-off-global-selectors*/}
        <style jsx>{`
          h1, a {
            font-family: "Arial";
          }

          ul {
            padding: 0;
          }

          li {
            list-style: none;
            margin: 5px 0;
          }

          a {
            text-decoration: none;
            color: blue;
          }

          a:hover {
            opacity: 0.6;
          }
        `}</style>
      </Layout>
    )
  }
}

export default Index

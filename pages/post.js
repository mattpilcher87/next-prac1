import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'
import React, { Component } from 'react'
import { withRouter } from 'next/router'

class Post extends Component {

  static async getInitialProps(context) {
    const { id } = context.query
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const show = await res.json()

    console.log(`Fetched show: ${show.name}`)

    return { show }
  }

  render() {
    return (
      <Layout>
         <h1>{this.props.show.name}</h1>
         <p>{this.props.show.summary.replace(/<[/]?p>/g, '')}</p>
         <img src={this.props.show.image.medium}/>
      </Layout>
    )
  }
}

export default Post

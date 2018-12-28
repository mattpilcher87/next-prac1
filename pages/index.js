// import React, { Component } from 'react'
// import Link from 'next/link'
//
// import Layout from '../components/MyLayout'
// // In the <Link> element, we have used another prop called “as”. That's the URL which we need to show on the browser. The URL your app sees is mentioned in the “href” prop.
//
//
// class Index extends Component {
//
//   getInitialProps = async function() {
//     const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
//     const data = await res.json()
//
//     console.log(`Show data fetched. Count: ${data.length}`)
//
//     return {
//       shows: data
//     }
//   }
//
//   render () {
//     console.log(this.props)
//     // const PostLink = (props) => (
//     //   <li>
//     //     <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
//     //       <a>{props.title}</a>
//     //     </Link>
//     //   </li>
//     // )
//
//     return (
//       <Layout>
//         <h1>Home Page</h1>
//         <hr />
//         {/* <ul>
//           {this.props.shows.map(({show}) => (
//             <li key={show.id}>
//               <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
//                 <a>{show.name}</a>
//               </Link>
//             </li>
//           ))}
//         </ul> */}
//         {/* <ul>
//           <PostLink id='post-one' title="Post One"/>
//           <PostLink id='post-two' title="Post Two"/>
//           <PostLink id='post-three' title="Post Three"/>
//         </ul> */}
//       </Layout>
//     )
//   }
// }
// 
// export default Index

import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({show}) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index

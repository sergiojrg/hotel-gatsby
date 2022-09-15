import React from 'react'

import Layout from '../components/layout'

export const Head = () => (
  <>
    <meta charSet="utf-8"/>
    <title>Gatsby Hotel</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  </>
)

const IndexPage = () => (
  <Layout>
    <h1>
      Gatsby hotel
    </h1>
  </Layout>
)



export default IndexPage

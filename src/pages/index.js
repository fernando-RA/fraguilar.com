import React from 'react'
import Link from 'gatsby-link'
import Header from "../components/header"

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

// export default IndexPage

export default () => (
    <div style={{ color: `purple` }}>
        <Link to="/contact/">Contact</Link>
        <Header headerText="Hello Gatsby!" />
        <p>What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
)

import React from 'react'
import Layout from '../layouts'

// TODO -> https://medium.com/front-end-hacking/learning-the-p5-canvas-drawing-library-in-es6-and-webpack-bf514a679544

const NotFoundPage = () => (
  <Layout>
    <div className="row NotFound">
      <div className="col-xs-offset-2 col-xs-8">
        <h1>Sorry, but there is nothing here!</h1>
        <p>I mean this page is here, <br/>
        but its not what you where looking for.</p>
        <p>Maybe there was something else here before… <br/>
        who knows?</p>
        <p>Maybe in another universe. <br/>
        or nowhere</p>
        <p>Anyway...<br/>Here is what everyone expects:</p>
        <h3>404 - Page not Found</h3>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage

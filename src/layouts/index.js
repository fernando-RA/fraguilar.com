import React from 'react'
import PropTypes from 'prop-types'

import Head from '../components/head';
import Header from '../components/header';
import Footer from '../components/footer';

import './styles/index.css'
import './styles/workshops.css'
import './styles/grid.css'

class Layout extends React.Component {
  render() {
    const { children, data, location } = this.props;
    let isWorkshopPage = false;

    if (location.pathname.includes('/workshops')) {
      isWorkshopPage = true;
    }

    return (
      <div>
        <Head data={data}/>
        {isWorkshopPage ? null : <Header siteTitle={data.site.siteMetadata.title}/>}
        <div className='MainContent'>
          {children()}
        </div>
        {isWorkshopPage ? null : <Footer/>}
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func
}

export default Layout

export const query = graphql `
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

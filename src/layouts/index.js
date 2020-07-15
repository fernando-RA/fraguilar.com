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
    const { children } = this.props;
    let isWorkshopPage = false;

    if (window.location.pathname.includes('/workshops')) {
      isWorkshopPage = true;
    }

    return (
      <div>
        <Head/>
        <Header/>
        <div className='MainContent'>
          { children }
        </div>
        <Footer/>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.array
}

export default Layout


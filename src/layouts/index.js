import React from 'react'
import PropTypes from 'prop-types'

import Head from '../components/head';
import Header from '../components/header';
import Footer from '../components/footer';

import './styles/form.css'
import './styles/grid.css'
import './styles/index.css'
import './styles/workshops.css'

class Layout extends React.Component {
  render() {
    const { children } = this.props;
   
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


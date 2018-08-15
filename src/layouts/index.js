import React from 'react';
import PropTypes from 'prop-types';

import Head from '../components/head';
import Header from '../components/header';

import './styles/index.css';

class Layout extends React.Component {
  render(){
    const { children, data, location } = this.props;

    return(
    <div>
    <Head data={data}/>
      <Header siteTitle={data.site.siteMetadata.title}/>
      <div className='MainContent'>
      {children()}
      </div>
    </div>
    )
  }
}
export default Layout

import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import favicon from './images/favicon.ico';
import image from './images/01.jpg';

const Head = ({data}) => {
  const title = data.site.siteMetadata;
  const keywords = data.site.siteMetadata.keywords;
  const description = data.site.siteMetadata.description;
  const url = data.site.siteMetadata.url;
  const userTwitter = data.site.siteMetadata.userTwitter;


  return (
    <Helmet>
    <title>{'title'}</title>
    <meta name="description" content={description}/>
    <meta name="image" content={image}/>
    <meta name="keywords" content={keywords}/>
    <link rel="icon" type="image/png" sizes="16x16" href={favicon}/>

    <meta property="og:url" content={url}/>
    <meta property="og:title" content={title}/>
    <meta property="og:description" content={description}/>
    <meta property="og:image" content={image}/>

    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:creator" content={userTwitter}/>
    <meta name="twitter:title" content={title}/>
    <meta name="twitter:description" content={description}/>
    <meta name="twitter:image" content={image}/>
    </Helmet>
  )
}

export default Head

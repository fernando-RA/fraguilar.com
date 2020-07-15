import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import favicon from './images/favicon.ico'
import image from './images/01.jpg'

const Head = () => (
  <StaticQuery
    query={graphql `
      query SiteHeadQuery {
        site {
          siteMetadata {
            title
            keywords
            description
            url
            userTwitter
          }
        }
      }
    `}
    render={data => (
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="image" content={image} />
        <meta name="keywords" content={data.site.siteMetadata.keywords} />
        <link rel="icon" type="image/png" fluid="16x16" href={favicon} />

        <meta property="og:url" content={data.site.siteMetadata.url} />
        <meta property="og:title" content={data.site.siteMetadata.title} />
        <meta
          property="og:description"
          content={data.site.siteMetadata.description}
        />
        <meta property="og:image" content={image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:creator"
          content={data.site.siteMetadata.userTwitter}
        />
        <meta name="twitter:title" content={data.site.siteMetadata.title} />
        <meta
          name="twitter:description"
          content={data.site.siteMetadata.description}
        />
        <meta name="twitter:image" content={image} />
      </Helmet>
    )}
  ></StaticQuery>
)

export default Head

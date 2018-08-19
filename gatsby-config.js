module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'Fernando Ribeiro A.',
    description: 'Fernando Ribeiro Aguilar. Building software as poetry, making Art using Technology.',
    keywords: 'Fernando, Ribeiro, Aguilar, machine, learning, artificial intelligence, ml, ai, art, Technology, software',
    url: "https://fraguilar.com",
    userTwitter: "@fernand0aguilar"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1280,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
}

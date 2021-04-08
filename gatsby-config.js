/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `No data`,
    menuLinks: [
      {
        name: 'home',
        link: '/',
      },
      {
        name: 'company',
        link: '/company',
        submenu: [
          {
            name: 'about',
            link: '/company/about',
          },
        ],
      },
      {
        name: 'services',
        link: '/services',
        submenu: [
          {
            name: 'service-one',
            link: '/services/service-one',
          },
          {
            name: 'service-two',
            link: '/services/service-two',
          },
          {
            name: 'service-three',
            link: '/services/service-three',
          },
        ],
      },
      {
        name: 'solutions',
        link: '/solutions',
        submenu: [
          {
            name: 'solution-one',
            link: '/solutions/solution-one',
          },
          {
            name: 'solution-two',
            link: '/solutions/solution-two',
          },
          {
            name: 'solution-three',
            link: '/solutions/solution-three',
          },
        ],
      },
      {
        name: 'stories',
        link: '/stories',
      },
      {
        name: 'contacts',
        link: '/contacts',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}

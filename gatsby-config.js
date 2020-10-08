/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Scheming Schemas!`,
    menuLinks: [
      {
        name: 'home',
        link: '/',
      },
      {
        name: 'page2',
        link: '/page-2',
      },
    ],
  },
  plugins: [`gatsby-plugin-material-ui`],
}

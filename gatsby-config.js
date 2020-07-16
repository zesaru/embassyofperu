require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Embassy of Peru`,
    description: `Pagina oficial de la Embajada del Perú en Japón.`,
    author: `@zesarum`,
    url: `http://www.embajadadelperuenjapon.org`,
    siteUrl: `http://www.embajadadelperuenjapon.org`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "es",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        query: `
          {
            site {
              siteMetadata {
                url
              }
            }
  
            allSitePage {
              nodes {
                path
              }
            }
        }`,
        resolveSiteUrl: ({ site }) => {
          //Alternativly, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
          return site.siteMetadata.url
        },
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map(node => {
            return {
              url: `${site.siteMetadata.siteUrl}${node.path}`,
              changefreq: `weekly`,
              priority: 0.7,
            }
          }),
      },
    },
    `gatsby-plugin-robots-txt`,
    
  ],
}

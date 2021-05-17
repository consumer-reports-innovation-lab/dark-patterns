require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})
const fs = require('fs')
const path = require('path')
const website = require('./siteconfig')
const pathPrefix = website.pathPrefix === '/' ? '' : website.pathPrefix

module.exports = {
  flags: {
    DEV_SSR: false
  },
  pathPrefix: website.pathPrefix,
  siteMetadata: {
    siteUrl: website.url + pathPrefix, // For gatsby-plugin-sitemap
    pathPrefix,
    title: website.title,
    description: website.description,
    shareImage: website.shareImage,
    headline: website.headline,
    inLanguage: website.inLanguage,
    ogLanguage: website.ogLanguage,
    author: website.author,
    twitter: website.twitter,
    facebook: website.facebook,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          includePaths: ["src/styles"],
        },
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/common/assets`,
        name: "images",
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url: process.env.WPGRAPHQL_URL,
        // develop: {
        //   hardCacheMediaFiles: true,
        //   // hardCacheData: true
        // },
        // production: {
        //   hardCacheMediaFiles: true,
        //   // hardCacheData: true
        // },
      },
    },


    // {
    //   resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
    //   options: {
    //     develop: true, // Activates purging in npm run develop
    //     // purgeOnly: ['/main.scss'], // applies purging only on the bulma css file
    //   },
    // }, // must be after other CSS plugins
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '1',
        matomoUrl: 'https://staging-darkpatterns.kinsta.cloud/wp-content/plugins/matomo/app/matomo.php',
        siteUrl: 'https://darkpatterns.gatsbyjs.io'
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: website.url,
        sitemap: `${website.url}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
        output: '/robots.txt'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./static/img/logo-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-gatsby-cloud`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

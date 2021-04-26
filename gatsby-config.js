require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})
const fs = require('fs')
const path = require('path')
const website = require('./siteconfig')


module.exports = {
  siteMetadata: {
    title: `Dark Patterns`,
    description: `Enter in default site meta description...`,
    lang: `en`,
    author: `@ocupop`,
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
    // Twitter Source
    // {
    //   resolve: `gatsby-source-twitter`,
    //   options: {
    //     credentials: {
    //       consumer_key: process.env.TWITTER_API_KEY,
    //       consumer_secret: process.env.TWITTER_API_SECRET,
    //       bearer_token: process.env.TWITTER_BEARER_TOKEN,
    //     },
    //     queries: {
    //       getTweets: {
    //         endpoint: "statuses/user_timeline",
    //         params: {
    //           screen_name: "darkpatterns",
    //           include_rts: false,
    //           exclude_replies: true,
    //           tweet_mode: "extended",
    //         },
    //       },
    //     },
    //   },
    // },

    {
      resolve: "gatsby-source-gravityforms",
      options: {
        // Base URL needs to include protocol (http/https)
        baseUrl: "http://ocupop.paulstroot.com",
        // Gravity Forms API

        api: {
          key: "ck_1c965e6f15c73f087f85fa6b6a7b4a29b191661d",
          secret: "cs_3056eebc1e83f13804225ff472c04e22d08ec9f6",
        },

        // Set to true to enable selfsigned certs in development mode
        allowSelfSigned: true,

        // Basic Auth
        /*
          basicAuth: {
              username: 'ocupop',
              password: '36NE XJao CWK1 PGRf JBon hh6h',
          },
          ignoreFields: [
              // Top level fields within the Gravity Forms return
              // to ignore.
              // Default ignore is 'notifications'. To keep this
              // as set, remove the ignoreFields setting from here.
              // If adding more fields, you will need to include
              // notifications to ensure it is ignored.
          ],
          */
      },
    },

    // You can have multiple instances of this plugin to create indexes with
    // different names or engines. For example, multi-lingual sites could create
    // an index for each language.
    // {
    //   resolve: 'gatsby-plugin-local-search',
    //   options: {
    //     // A unique name for the search index. This should be descriptive of
    //     // what the index contains. This is required.
    //     name: 'posts',

    //     // Set the search engine to create the index. This is required.
    //     // The following engines are supported: flexsearch, lunr
    //     engine: 'flexsearch',

    //     // Provide options to the engine. This is optional and only recommended
    //     // for advanced users.
    //     //
    //     // Note: Only the flexsearch engine supports options.
    //     engineOptions: 'speed',

    //     // GraphQL query used to fetch all data for the search index. This is
    //     // required.
    //     query: fs.readFileSync(
    //       path.resolve(__dirname, 'src/searchQuery.graphql'),
    //       'utf-8',
    //     ),

    //     // Field used as the reference value for each document.
    //     // Default: 'id'.
    //     ref: 'url',

    //     // List of keys to index. The values of the keys are taken from the
    //     // normalizer function below.
    //     // Default: all fields
    //     index: ['url', 'title', 'content', 'tags'],

    //     // List of keys to store and make available in your UI. The values of
    //     // the keys are taken from the normalizer function below.
    //     // Default: all fields
    //     store: ['url', 'title', 'description', 'mainImage'],

    //     // Function used to map the result from the GraphQL query. This should
    //     // return an array of items to index in the form of flat objects
    //     // containing properties to index. The objects must contain the `ref`
    //     // field above (default: 'id'). This is required.
    //     normalizer: ({ data }) =>
    //       data.allWpPost.nodes.map(node => ({
    //         url: node.uri,
    //         title: node.title,
    //         description: node.content,
    //         // featuredImage: node.acfPostTypeNews.mainImage.localFile.childImageSharp,
    //         mainImage: node.acfPostTypeNews.mainImage,
    //         tags: node.tags.nodes.map(tag => tag.name),
    //       })),
    //   },
    // },

    // {
    //   resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
    //   options: {
    //     develop: true, // Activates purging in npm run develop
    //     purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
    //   },
    // }, // must be after other CSS plugins
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
        icon: `src/common/assets/logo-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-gatsby-cloud`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

import { graphql } from "gatsby"

export const ExampleSEO = graphql`
  fragment ExampleSEO on WpExample {
    seo {
      title
      canonical
      metaDesc
      metaRobotsNofollow
      metaRobotsNoindex
      opengraphSiteName
      opengraphTitle
      opengraphUrl
      opengraphType
      opengraphModifiedTime
      opengraphImage {
        sourceUrl
      }
      twitterTitle
      twitterDescription
      twitterImage {
        sourceUrl
      }
    }
  }
`


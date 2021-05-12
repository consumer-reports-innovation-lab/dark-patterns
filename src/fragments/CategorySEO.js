import { graphql } from "gatsby"

export const CategorySEO = graphql`
  fragment CategorySEO on WpCategory {
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


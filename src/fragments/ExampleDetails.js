import { graphql } from "gatsby"

export const ExampleDetails = graphql`
  fragment ExampleDetails on WpExample {
    ...ExampleSummary
    featuredImage {
      node {
        localFile {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
    categories {
      nodes {
        id
        name
        uri
        count
        contentNodes {
          nodes {
            ... on WpExample {
              ...ExampleSummary
            }
          }
        }
      }
    }
    tags {
      nodes {
        id
        name
        uri
        count
        contentNodes {
          nodes {
            ... on WpExample {
              ...ExampleSummary
            }
          }
        }
      }
    }
  }
`
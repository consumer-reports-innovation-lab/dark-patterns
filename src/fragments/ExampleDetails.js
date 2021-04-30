import { graphql } from "gatsby"

export const ExampleDetails = graphql`
  fragment ExampleDetails on WpExample {
    ...ExampleSummary
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
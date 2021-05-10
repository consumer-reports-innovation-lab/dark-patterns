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
    industries {
      nodes {
        id
        name
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
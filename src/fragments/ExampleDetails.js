import { graphql } from "gatsby"

export const ExampleDetails = graphql`
  fragment ExampleDetails on WpExample {
    id
    title
    uri
    date(formatString: "MMMM DD, YYYY")
    patternAttributes {
      affiliatedCompany
      description
      industry
    }
    featuredImage {
      node {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
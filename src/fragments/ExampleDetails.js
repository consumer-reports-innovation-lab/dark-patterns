import { graphql } from "gatsby"

export const ExampleDetails = graphql`
  fragment ExampleDetails on WpDarkPattern {
    id
    title
    uri
    date(formatString: "MMMM DD, YYYY")
    patternAttributes {
      describeThisDarkPatternOptional
      industry
      sourceLink
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
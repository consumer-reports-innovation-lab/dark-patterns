import { graphql } from "gatsby"

export const ExampleSummary = graphql`
  fragment ExampleSummary on WpExample {
    id
    title
    uri
    date(formatString: "MMMM DD, YYYY")
    patternAttributes {
      affiliatedCompany
      description
      industry
    }
  }
`
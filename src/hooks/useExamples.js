import { useStaticQuery, graphql } from "gatsby"

export const useExamples = () => {
  const data = useStaticQuery(graphql`
      query Examples {
        allWpExample(
          filter: {status: {eq: "publish"}}
          sort: {order: DESC, fields: date}
        ) {
          edges {
            node {
              ...ExampleDetails
            }
          }
        }
      }
    `
  )
  const examples = data.allWpExample.edges

  return { examples }
}


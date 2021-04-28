import { useStaticQuery, graphql } from "gatsby"

export const useExamples = () => {
  const data = useStaticQuery(graphql`
      query Examples {
        allWpExample(sort: {order: DESC, fields: date}) {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    `
  )
  const examples = data.allWpExample.edges

  return { examples }
}


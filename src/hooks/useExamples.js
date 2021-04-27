import { useStaticQuery, graphql } from "gatsby"

export const useExamples = () => {
  const data = useStaticQuery(graphql`
      query Examples {
        allWpDarkPattern(sort: {order: DESC, fields: date}) {
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
  const examples = data.allWpDarkPattern.edges

  return { examples }
}


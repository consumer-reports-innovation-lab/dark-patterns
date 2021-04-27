import { useStaticQuery, graphql } from "gatsby"

export const useCategories = () => {
  const data = useStaticQuery(graphql`
      query Categories {
        allWpCategory {
          edges {
            node {
              id
              name
              description
              parentId
              wpChildren {
                nodes {
                  id
                  name
                  description
                }
              }
            }
          }
        }
      }
    `
  )
  const categories = data.allWpCategory.edges

  return { categories }
}


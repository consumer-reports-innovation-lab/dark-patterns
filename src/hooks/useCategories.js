import { useStaticQuery, graphql } from "gatsby"

export const useCategories = () => {
  const data = useStaticQuery(graphql`
      query Categories {
        allWpCategory {
          edges {
            node {
              id
              termTaxonomyId
              uri
              name
              description
              parentId
              wpChildren {
                nodes {
                  id
                  termTaxonomyId
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


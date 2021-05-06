import { useStaticQuery, graphql } from "gatsby"

export const useIndustries = () => {
  const data = useStaticQuery(graphql`
      query Industries {
        allWpIndustry {
          edges {
            node {
              id
              name
              slug
            }
          }
        }
      }
    `
  )
  const industries = data.allWpIndustry.edges

  return { industries }
}


import { useStaticQuery, graphql } from "gatsby"

export const useAdvisory = () => {
  const data = useStaticQuery(graphql`
      query Partners {
        allWpPartner(sort: {order: DESC, fields: title}) {
          nodes {
            id
            title
            partnerOptions {
              logoImage {
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 200, quality: 100, layout: CONSTRAINED)
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  const advisory = data.allWpPartner.nodes

  return { advisory }
}

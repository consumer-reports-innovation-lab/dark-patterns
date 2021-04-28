import { useStaticQuery, graphql } from "gatsby"

export const usePartners = () => {
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
                    gatsbyImageData(width: 500, quality: 100, layout: CONSTRAINED)
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  const partners = data.allWpPartner.nodes

  return { partners }
}

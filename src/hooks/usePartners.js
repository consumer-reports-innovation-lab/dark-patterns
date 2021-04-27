import { useStaticQuery, graphql } from "gatsby"

export const usePartners = () => {
  const data = useStaticQuery(graphql`
      query Partners {
        allWpPartner(sort: {order: DESC, fields: title}) {
          edges {
            node {
              id
              title
              partnerOptions {
                logoImage {
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  const partners = data.allWpPartner.edges

  return { partners }
}

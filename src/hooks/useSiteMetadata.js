import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            siteUrl
            title
            headline
            description
            inLanguage
            ogLanguage
            shareImage
          }
        }
        wp(id: {eq: "/graphql--rootfields"}) {
          seo {
            social {
              facebook {
                url
                defaultImage {
                  sourceUrl
                  mediaDetails {
                    height
                    width
                  }
                }
              }
              wikipedia {
                url
              }
              instagram {
                url
              }
              linkedIn {
                url
              }
              mySpace {
                url
              }
              pinterest {
                url
              }
              twitter {
                username
              }
              youTube {
                url
              }
            }
          }
        }
      }
    `
  )

  const { site, wp: { seo: { social } } } = data

  const defaultSEO = { ...site.siteMetadata, ...social }

  return { social, defaultSEO }
}

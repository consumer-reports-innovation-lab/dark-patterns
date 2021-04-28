import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author
            description
            inLanguage
            title
          }
        }
      }
    `
  )

  const { site } = data

  const defaultSEO = { ...site.siteMetadata }

  return { defaultSEO }
}

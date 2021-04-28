import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author
            description
            lang
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

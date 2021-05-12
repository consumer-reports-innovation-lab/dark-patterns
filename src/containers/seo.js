import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useSiteMetadata } from '../hooks/useSiteMetadata'

const SEO = ({ pageSEO, meta, className }) => {
  const { defaultSEO } = useSiteMetadata()
  const seo = {
    ...defaultSEO,
    ...pageSEO,
  }

  return (
    <Helmet
      htmlAttributes={{
        lang: seo.inLanguage,
      }}
      bodyAttributes={{
        class: className
      }}
      title={seo.title}
      titleTemplate={`${seo.title}`}
      meta={[
        { name: 'description', content: seo.metaDesc ? seo.metaDesc : seo.description },
        { name: 'og:type', content: "website" },
        { name: "og:title", content: seo.opengraphTitle ? seo.opengraphTitle : seo.title },
        { name: "og:description", content: seo.metaDesc ? seo.metaDesc : seo.description },
        { name: "og:url", content: seo.opengraphUrl ? seo.opengraphUrl : seo.siteUrl },
        { name: "og:site_name", content: seo.opengraphSiteName ? seo.opengraphSiteName : seo.title },
        { name: "article:publisher", content: seo.facebook.url ? seo.facebook.url : seo.siteUrl },
        { name: "article:modified_time", content: seo.opengraphModifiedTime },
        { name: "og:image", content: seo.opengraphImage?.sourceUrl ? seo.opengraphImage?.sourceUrl : seo.shareImage },
        { name: "og:image:width", content: `1200px` },
        { name: "og:image:height", content: `1200px` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:creator", content: `@${seo.twitter.username}` },
        { name: "twitter:site", content: `@${seo.twitter.username}` },
      ].concat(meta)}
    />

  )
}

SEO.propTypes = {
  pageSEO: PropTypes.instanceOf(Object),
  className: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
}
SEO.defaultProps = {
  pageSEO: null,
  className: '',
  meta: []
}



export default SEO


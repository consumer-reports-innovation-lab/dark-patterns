import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useSiteMetadata } from '../../hooks/useSiteMetadata'

const HEAD = ({ pageDescription, pageTitle, pageAuthor }) => {
  const { title, description, author, lang } = useSiteMetadata()

  const metaTitle = pageTitle || title
  const metaDescription = pageDescription || description
  const metaAuthor = pageAuthor || author

  return (
    <Helmet titleTemplate={`%s | ${metaTitle}`} defaultTitle={title}>
      <html lang={lang} />
      <body />
      <meta name="description" content={metaDescription} />
      <meta name="author" content={metaAuthor} />
      {/* TODO - Add default metaData and logic for page overrides */}
    </Helmet>
  )
}

HEAD.propTypes = {
  pageDescription: PropTypes.string,
  pageAuthor: PropTypes.string,
  // meta: PropTypes.arrayOf(PropTypes.object),
  pageTitle: PropTypes.string
}

export default HEAD

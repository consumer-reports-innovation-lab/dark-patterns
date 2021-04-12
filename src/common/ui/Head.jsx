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
      <link rel="preconnect" href="//cdn.cr.org/" crossorigin="true" />
      <link
        rel="preload"
        href="//cdn.cr.org/crux/fonts/v1/AvertaW01-Light.woff2?v=1.0.1"
        as="font"
        crossorigin="true"
      />
      <link
        rel="preload"
        href="//cdn.cr.org/crux/fonts/v1/AvertaW01-Regular.woff2?v=1.0.1"
        as="font"
        crossorigin="true"
      />
      <link
        rel="preload"
        href="//cdn.cr.org/crux/fonts/v1/AvertaW01-Bold.woff2?v=1.0.1"
        as="font"
        crossorigin="true"
      />
      <link
        rel="preload"
        href="//cdn.cr.org/crux/styles/2.0/static/icons/crux-icons.woff"
        as="font"
        crossorigin="true"
      />
    </Helmet>
  );
}



HEAD.propTypes = {
  pageDescription: PropTypes.string,
  pageAuthor: PropTypes.string,
  // meta: PropTypes.arrayOf(PropTypes.object),
  pageTitle: PropTypes.string
}

export default HEAD

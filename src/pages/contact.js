import React from 'react'
// import PropTypes from 'prop-types'
import ContactUs from '../components/contact/ContactUs'
import Layout from '../containers/Layout'
import SEO from '../containers/seo'

const report = () => {
  const pageSEO = {
    title: "Get in Touch"
  }
  return (
    <Layout>
      <SEO pageSEO={pageSEO} />
      <ContactUs />
    </Layout>
  )
}

report.propTypes = {

}

export default report
import React from 'react'
// import PropTypes from 'prop-types'
import PostExample from '../components/examples/PostExample'
import Layout from '../containers/Layout'
import SEO from '../containers/seo'

const report = () => {
  const pageSEO = {
    title: "Report a Dark Pattern to the Tip Line"
  }
  return (
    <Layout>
      <SEO pageSEO={pageSEO} />
      <PostExample />
    </Layout>
  )
}

report.propTypes = {

}

export default report

import React from 'react'
// import PropTypes from 'prop-types'
import PostExample from '../components/examples/PostExample'
import Layout from '../containers/Layout'
import SEO from '../containers/seo'

const report = () => {
  return (
    <Layout>
      <SEO />
      <PostExample />
    </Layout>
  )
}

report.propTypes = {

}

export default report

import React from "react"
import IndustryExamples from "../components/home/IndustryExamples"
// import PatternForm from "../components/PatternForm"
import PostExample from '../components/examples/PostExample'
import OurPurpose from '../components/home/OurPurpose'
import Intro from "../components/home/Intro"
import Layout from '../containers/Layout'
import SEO from '../containers/seo'

const Home = () => {
  const pageSEO = {
    title: "Welcome to the Dark Patterns Tip Line"
  }
  return (
    <Layout>
      <SEO pageSEO={pageSEO} />
      <Intro />

      <IndustryExamples />

      <PostExample />

      <OurPurpose />
    </Layout>
  )
}

export default Home

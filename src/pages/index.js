import React from "react"
// import PropTypes from 'prop-types'

import FeaturedExamples from "../components/home/FeaturedExamples"
import PatternForm from "../components/PatternForm"
import OurPurpose from '../components/home/OurPurpose'
import Intro from "../components/home/Intro"


const Home = () => {
  return (
    <>
      <Intro />

      <FeaturedExamples />

      <PatternForm />

      <OurPurpose />
    </>
  )
}

Home.propTypes = {

}

export default Home

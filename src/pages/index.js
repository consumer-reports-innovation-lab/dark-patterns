import React from "react"
import IndustryExamples from "../components/home/IndustryExamples"
// import PatternForm from "../components/PatternForm"
import PostExample from '../components/examples/PostExample'
import OurPurpose from '../components/home/OurPurpose'
import Intro from "../components/home/Intro"


const Home = () => {
  return (
    <>
      <Intro />

      <IndustryExamples />

      <PostExample />

      <OurPurpose />
    </>
  )
}

export default Home

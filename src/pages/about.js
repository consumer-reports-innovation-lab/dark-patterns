import React from "react"
// import PropTypes from 'prop-types'
import Scrollspy from 'react-scrollspy'
import Intro from "../components/about/Intro"
import Goals from "../components/about/Goals"
import Team from "../components/about/Team"
import Advisory from "../components/about/Advisory"
import CTA from "../components/about/CTA"
import Layout from "../containers/Layout"
import SEO from '../containers/seo'

const AboutPage = () => {
  const pageSEO = {
    title: "About Us"
  }
  const goals = [
    {
      slug: "we-ground-our-work-in-human-centered-perspectives.",
      title: "We ground our work in human-centered perspectives.",
      description: "Perspectives of everyday people is missing from dense, legal, and wonky conversations about dark patterns. This project is powered by research with individuals who suffered dark pattern-instigated harms.",
      iconPath: "/static/img/logo-icon.png"
    },
    {
      slug: "we-collaborate-across-teams-and-functions.",
      title: "We collaborate across teams and functions.",
      description: "People across industries are working together to better understand how dark patterns hurt people. Our team includes designers, academic researchers, legal experts, policy specialists, and advocacy-minded individuals.",
      iconPath: "/static/img/logo-icon.png"
    },
    {
      slug: "we-value-both-qualitative-and-quantitative-data-to-create-impact.",
      title: "We value both qualitative and quantitative data to create impact.",
      description: "The Dark Patterns Tip Line was founded to serve as a crowdsourcing platform where people submit dark patterns they’ve encountered. The data collected is supplemented with qualitative analysis via one-on-one interviews to better understand the human impact of these malicious tactics.",
      iconPath: "/static/img/logo-icon.png"
    },
  ]


  return (
    <Layout>
      <SEO pageSEO={pageSEO} />
      <section >
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8 col-xl-7">
              <Intro />
              <hr className="bg-primary my-5" />
              <Goals goals={goals} />
              <hr className="bg-primary my-5" />
              <Team />
              <hr className="bg-primary my-5" />
              <Advisory />
            </div>

            <div className="col-4 offset-xl-1  d-none d-lg-flex justify-content-center">
              <div className="sticky pt-5">
                <h3 className="">On This Page</h3>
                <Scrollspy items={['about', 'our-values', 'team']} offset={-50} currentClassName="active" className="navbar about-nav" >
                  <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                  <li className="nav-item"><a className="nav-link" href="#our-values">Our Values</a></li>
                  <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
                  <li className="nav-item"><a className="nav-link" href="#advisory">Advisory</a></li>
                </Scrollspy>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTA />
    </Layout>
  )
}

AboutPage.propTypes = {

}

AboutPage.defaultProps = {

}


export default AboutPage

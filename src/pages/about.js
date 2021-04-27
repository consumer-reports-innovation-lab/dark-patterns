import React from "react"
// import PropTypes from 'prop-types'

import Intro from "../components/about/Intro"
import Goals from "../components/about/Goals"
import Team from "../components/about/Team"
import Partners from "../components/about/Partners"
import CTA from "../components/about/CTA"

const AboutPage = () => {
  const goals = [
    {
      slug: "collect",
      title: "Collect",
      description: "Recognized dark patterns - Pellentesque at bibendum mauris, in porta nisi duis ornare.Duis ornare ac metus et porttitor.",
      iconPath: "../../common/assets/logos/logo-icon.png"
    },
    {
      slug: "educate",
      title: "Educate",
      description: "Recognized dark patterns - Pellentesque at bibendum mauris, in porta nisi duis ornare.Duis ornare ac metus et porttitor.",
      iconPath: "../../common/assets/logos/logo-icon.png"
    },
    {
      slug: "change",
      title: "Change",
      description: "Recognized dark patterns - Pellentesque at bibendum mauris, in porta nisi duis ornare.Duis ornare ac metus et porttitor.",
      iconPath: "../../common/assets/logos/logo-icon.png"
    },
  ]
  const partners = []
  const team = []

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <Intro />
              <hr className="bg-primary" />
              <Goals goals={goals} />
              <hr className="bg-primary" />
              <Team team={team} />
              <hr className="bg-primary" />
              <Partners partners={partners} />
            </div>
            <div className="col-2 offset-2 d-none-d-md-flex">
              {/* TODO Add scrollspy to wrapper for this page */}
              <nav className="navbar sticky">
                <nav className="nav">
                  <span className="nav-link text-primary">On This Page</span>
                  <a className="nav-link text-dark" href="#about">
                    About
                  </a>
                  <a className="nav-link text-dark" href="#our-goals">
                    Our Goals
                  </a>
                  <a className="nav-link text-dark" href="#team">
                    Team
                  </a>
                  <a className="nav-link text-dark" href="#partners">
                    Partners
                  </a>
                </nav>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}

AboutPage.propTypes = {

}

AboutPage.defaultProps = {

}


export default AboutPage

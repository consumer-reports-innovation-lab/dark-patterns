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
    const team = [
    {
      slug: "stephanie-nguyen",
      name: "Stephanie Nguyen",
      org: "Dark Patterns Tipline",
      title: "Lead"
    },
    {
      slug: "ben-moskowitz",
      name: "Ben Moskowitz",
      org: "Consumer Reports",
      title: "Advisory, Director of the Digital Lab"
    },
    {
      slug: "shirin-mori",
      name: "Shirin Mori",
      org: "EFF",
      title: "Advisory, Designer"
    },
    {
      slug: "jasmine-mcnealy",
      name: "Jasmine McNealy",
      org: "University of Florida",
      title: "Advisory, Associate Professor"
    },
    {
      slug: "katie-mcinnis",
      name: "Katie McInnis",
      org: "",
      title: ""
    },
    {
      slug: "arunesh-mathur",
      name: "Arunesh Mathur",
      org: "",
      title: ""
    },
    {
      slug: "dennis-jen",
      name: "Dennis Jen",
      org: "Media Cloud",
      title: "Advisory, Chief Technology Officer"
    },
    {
      slug: "amira-dhalla",
      name: "Amira Dhalla",
      org: "Consumer Reports",
      title: "Advisory, Associate Director"
    },
    {
      slug: "sage-cheng",
      name: "Sage Cheng",
      org: "Access Now",
      title: "Advisory, Design and UX Lead"
    },
    {
      slug: "harry-brignull",
      name: "Harry Brignull",
      org: "DarkPatterns.org",
      title: "Advisory, Founder"
    },
    {
      slug: "jennifer-brody",
      name: "Jennifer Brody",
      org: "Access Now",
      title: "Advisory, U.S. Advocacy Manager"
    },
    {
      slug: "matt-bailey",
      name: "Matt Bailey",
      org: "PEN America",
      title: "Advisory, Digital Freedom Program Director"
    },
  ]
  const partners = [
    {
      slug: "consumer-reports",
      org: "Consumer Reports",
      logoPath: "/static/img/logo-icon.png"
    },
    {
      slug: "dark-patterns",
      org: "Dark Patterns",
      logoPath: "/static/img/logo-icon.png"
    },
  ]


  return (
    <>
      <section >
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <Intro />
              <hr className="bg-primary my-5" />
              <Goals goals={goals} />
              <hr className="bg-primary my-5" />
              <Team team={team} />
              <hr className="bg-primary my-5"/>
              <Partners partners={partners} />
            </div>
            <div className="col-4 d-flex align-items-start justify-content-center pt-5">
              {/* TODO Add scrollspy to wrapper for this page */}
              <nav className="navbar sticky" id="aboutNav">
                  <h3 className="">On This Page</h3>
                 <ul className="nav">
                    <li className="nav-item ">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                  </ul>

                {/* <div className="nav" >

                  <h3 className="">On This Page</h3>




                    <a className="nav-link" href="#about">
                    About
                  </a>

                  <a className="nav-link" href="#our-values">
                    Our Values
                  </a>
                  <a className="nav-link" href="#team">
                    Team
                  </a>
                  <a className="nav-link" href="#partners">
                    Partners
                  </a>
                </div> */}
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

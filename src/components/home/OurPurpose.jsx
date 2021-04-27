import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const OurPurpose = () => {
  return (
    <section className="bg-dark">
      <div className="container">
        <div className="row content-center">
          <div className="col-12 col-md-6 col-lg-6 mb-5 pb-5">
            <h2>Our Purpose</h2>
            <p>
              The Dark Patterns Tip Line is a platform that allows people to
              submit deceptive designs they see in everyday digital products
              and services. Through crowdsourcing human stories of digital
              manipulation and amplifying people’s voices, we will raise
              awareness of the real-life harms that result from deceptive
              designs. Your stories and screenshots will help pressure
              lawmakers to hold companies accountable for online abuse.
              </p>
            <Link to="/about" className="btn btn-primary">
              About Us
              </Link>
          </div>
          <div className="col-12 col-md-6 offset-lg-1 col-lg-5 d-flex flex-column justify-content-center align-items-start">
            <ul className="icon-list">
              <li className="align-items-start mb-5">
                <StaticImage
                  className="list-icon mt-2"
                  alt=""
                  src="../common/assets/logos/logo-icon.svg"
                />
                <div className="text-small">
                  <h4>Engage</h4>
                  <p>
                    Engage and encourage people to submit their stories of
                    dark patterns online.
                    </p>
                </div>
              </li>
              <li className="align-items-start mb-5">
                <StaticImage
                  className="list-icon mt-2"
                  alt=""
                  src="../common/assets/logos/logo-icon.svg"
                />
                <div className="text-small">
                  <h4>Inform</h4>
                  <p>
                    Inform the public on how to avoid devious design tactics
                    they may encounter in everyday use of online products and
                    services.
                    </p>
                </div>
              </li>
              <li className="align-items-start mb-5">
                <StaticImage
                  className="list-icon mt-2"
                  alt=""
                  src="../common/assets/logos/logo-icon.svg"
                />
                <div className="text-small">
                  <h4>Empower</h4>
                  <p>
                    Empower policymakers and advocates with evidence that
                    illustrates real-life harms of deception online.
                    </p>
                </div>
              </li>
              <li className="align-items-start mb-5">
                <StaticImage
                  className="list-icon mt-2"
                  alt=""
                  src="../common/assets/logos/logo-icon.svg"
                />
                <div className="text-small">
                  <h4>Change</h4>
                  <p>
                    Change the status quo by advocating for stronger consumer
                    protections and holding companies accountable.
                    </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

OurPurpose.propTypes = {

}

export default OurPurpose
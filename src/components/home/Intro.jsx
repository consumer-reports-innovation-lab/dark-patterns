import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from "gatsby"

const Intro = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h1 className="text-hero">Dark Patterns Tip Line</h1>
            <p>
              Every day, we’re exploited for profit through{" "}
              <strong>dark patterns</strong>: design tactics used in websites
                and apps to trick you into doing things you never meant to do.
              </p>
            <p className="text-small">
              <strong>
                We need to take a stand against dark patterns — and you can
                help. Join us as we fight back against companies using
                manipulative dark patterns to steal our private information,
                money, and time. You deserve respect, online and off.
                </strong>
            </p>

            <Link to="/report" className="btn btn-primary">
              Report a Pattern
              </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

Intro.propTypes = {

}

export default Intro

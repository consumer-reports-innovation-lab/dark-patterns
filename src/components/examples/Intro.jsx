import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Intro = () => {
  return (
    <section className="pb-0">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <h1>Dark patterns spotted by people like you</h1>
            <p>
              Frustrated people all over the world have found dark patterns even on mainstream websites and apps. Click around to see some examples of how these dark patterns hurt people, and better understand the techniques companies use to trick you into doing what they want.
              </p>
            <Link to="/report" className="btn btn-primary">Report a Pattern</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

Intro.propTypes = {

}

export default Intro

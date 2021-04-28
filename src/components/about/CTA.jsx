import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const CTA = () => {
  return (
    <section className="bg-dark">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12">
            <h1 className="text-white">Look Familiar?</h1>
            <Link to="/report" className="btn btn-primary">
              Report a Pattern
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

CTA.propTypes = {

}

export default CTA

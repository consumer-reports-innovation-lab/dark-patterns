import React from 'react'
import PropTypes from 'prop-types'

const CTA = () => {
  return (
    <section>
      <div className="container">
        <div className="row ">
          <div className="col-12 content-center">
            <h1 className="text-white">Look Familiar?</h1>
          </div>
          <div className="col-12 content-center">
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

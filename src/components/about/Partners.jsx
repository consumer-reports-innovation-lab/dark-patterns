import React from "react"
import PropTypes from 'prop-types'

const Partners = ({ partners }) => {
  return (
    <div id="partners">
      <div className="row">
        <div className="col-12">
          <h2>Partners</h2>
        </div>
      </div>
      <div className="row">
        {partners && partners.map(partner => {

          return (
            <div className="col-4">
              Logo goes here...
            </div>
          )
        })}
      </div>
    </div>
  )
}

Partners.propTypes = {
  partners: PropTypes.instanceOf(Array)
}

Partners.defaultProps = {
  partners: []
}

export default Partners

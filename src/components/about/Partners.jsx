import React from "react"
import PropTypes from 'prop-types'
import { StaticImage } from "gatsby-plugin-image"

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
            <div className="col-4 my-5">

              {partner.org}
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

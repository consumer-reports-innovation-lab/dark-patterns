import React from "react"
// import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useAdvisory } from '../../hooks/useAdvisory'

const Advisory = () => {
  const { advisory } = useAdvisory()

  return (
    <div id="advisory">
      <div className="row">
        <div className="col-12">
          <h2>Advisory</h2>
        </div>
      </div>
      <div className="row">
        {advisory && advisory.map(partner => {
          const {id, title, partnerOptions: {logoImage}} = partner
          const imageData = getImage(logoImage?.localFile)
          console.log(imageData)
          return (
            <div key={id} className="col-4 my-5">
              {imageData && (
                <GatsbyImage
                  image={imageData}
                  alt={title}
                  className="img-fluid"
                />
              )}
            </div>
          )
        })}

      </div>
    </div>
  )
}

Advisory.propTypes = {
  // advisory: PropTypes.instanceOf(Array)
}

Advisory.defaultProps = {
  // advisory: []
}

export default Advisory

import React from 'react'
import PropTypes from 'prop-types'

const LoadingComponent = ({ inverted }) => {
  return (
    <div>
      <span className="h3">Loading...</span>
    </div>
  )
}

LoadingComponent.propTypes = {
  inverted: PropTypes.bool
}

export default LoadingComponent

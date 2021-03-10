import React from 'react'
import PropTypes from 'prop-types'
import { Dimmer, Loader } from 'semantic-ui-react'

const LoadingComponent = ({ inverted }) => {
  return (
    <Dimmer active inverted={inverted}>
      <Loader content="Loading..." />
    </Dimmer>
  )
}

LoadingComponent.propTypes = {
  inverted: PropTypes.bool
}

export default LoadingComponent

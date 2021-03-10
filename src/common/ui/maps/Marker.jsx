import React from 'react'
import PropTypes from 'prop-types'

const Marker = ({ onClick, text }) => {

 return (
   <div
    className="marker"
    role="button"
    tabIndex={0}
    alt={text}
    onClick={() => onClick}
    onKeyPress={onClick} />
 )
}

Marker.defaultProps = {
  onClick: null
}

Marker.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired
}

export default Marker

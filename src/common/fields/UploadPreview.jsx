import React from 'react'
import PropTypes from 'prop-types'

const UploadPreview = ({ meta }) => {
  const { name, percent, status } = meta

  return (
    <span>
      {name}, {Math.round(percent)}%, {status}
    </span>
  )
}

UploadPreview.propTypes = {}

export default UploadPreview

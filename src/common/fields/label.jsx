import React from 'react'
import PropTypes from 'prop-types'
import Hint from './hint'

const Label = ({ hint, label }) => {

  return (
    <label className={label ? '' : 'sr-only'}>
      <span>{label}</span>
      {hint && <Hint content={hint} />}
    </label>
  )
}

Label.propTypes = {
  label: PropTypes.string,
  hint: PropTypes.string
}

export default Label

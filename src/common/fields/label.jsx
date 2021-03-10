/* eslint-disable jsx-a11y/label-has-for */
import React from 'react'
import PropTypes from 'prop-types'
import Hint from './hint'

const label = ({ hint, label }) => {
  return (
    <label className={label ? '' : 'sr-only'}>
      <span className="mr-2">{label}</span>
      {hint && <Hint content={hint} />}
    </label>
  )
}

label.propTypes = {
  label: PropTypes.string,
  hint: PropTypes.string
}

export default label

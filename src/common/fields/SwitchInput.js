import React from 'react'
import { Checkbox } from 'semantic-ui-react'
import Hint from './hint'

const SwitchInput = ({ className, hint, type, label, field, onChange, toggle, form: { errors, touched } }) => {
  // deleting field.value, this throws an error with the Checkbox Element.
  delete field.value
  return (
    <div className={`form-group ${className}`}>
      <Checkbox {...field} type={type} checked={field.checked} label={label} onChange={onChange} toggle={toggle} />
      {hint && <Hint content={hint} />}
    </div>
  )
}

export default SwitchInput

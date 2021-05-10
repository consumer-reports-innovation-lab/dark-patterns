import React from 'react'
import Hint from './hint'
import { Checkbox } from 'semantic-ui-react'


const SwitchInput = ({ children, className, hint, type, label, field, onChange, required, toggle, form: { errors, touched } }) => {
  // deleting field.value, this throws an error with the Checkbox Element.
  delete field.value
  const status = touched[field.name] && errors[field.name] ? `is-invalid` : ``
  return (
    <div className={`form-group ${className} ${status}`}>
      <Checkbox {...field} type={type} checked={field.checked} label={label} onChange={onChange} toggle={toggle} />
      {hint && <Hint content={hint} />}
      { children }
    </div>
  )
}

export default SwitchInput

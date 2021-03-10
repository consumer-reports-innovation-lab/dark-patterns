import React from 'react'
import Label from './label'

const TextInput = ({ hint, type, label, placeholder, required, field, form: { errors, touched } }) => {
  const status = touched[field.name] && errors[field.name] ? `is-invalid` : ``
  return (
    <div className="form-group">
      <Label label={label} hint={hint} />
      <input
        className={`form-control ${status}`}
        {...field}
        placeholder={placeholder}
        type={type}
        required={required}
      />
      {touched[field.name] && errors[field.name] && <div className="invalid-feedback">{errors[field.name]}</div>}
    </div>
  )
}

export default TextInput

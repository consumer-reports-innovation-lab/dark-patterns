import React from 'react'
import Label from './label'

const TextArea = ({ label, hint, rows, placeholder, type, field, form: { errors, touched } }) => {
  const status = touched[field.name] && errors[field.name] ? `is-invalid` : ``
  return (
    <div className="form-group">
      <Label label={label} hint={hint} />
      <textarea className={`form-control ${status}`} {...field} placeholder={placeholder} rows={rows} type={type} />
      {touched[field.name] && errors[field.name] && <span className="invalid-feedback">{errors[field.name]}</span>}
    </div>
  )
}

export default TextArea

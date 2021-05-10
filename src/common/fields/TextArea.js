import React from 'react'
import Label from './label'

const TextArea = ({ className, label, hint, rows, placeholder, type, field, form: { errors, touched } }) => {
  const status = touched[field.name] && errors[field.name] ? `is-invalid` : ``
  return (
    <div className={className}>
      <Label label={label} hint={hint} />
      <div className="form-group">
        <textarea
          className={`form-control ${status}`}
          {...field}
          placeholder={placeholder}
          rows={rows}
          type={type} />
        <p className="form-hint">{hint}</p>
      </div>
      {touched[field.name] && errors[field.name] && <span className="invalid-feedback d-inline-block">{errors[field.name]}</span>}
    </div>
  )
}

export default TextArea

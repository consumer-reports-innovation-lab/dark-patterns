import React from 'react'
import Label from './label'

const TextInput = ({ className, innerRef, hint, type, label, placeholder, required, field, form: { errors, touched } }) => {
  const status = touched[field.name] && errors[field.name] ? `is-invalid` : ``
  return (
    <>
      <div className={`${className}`}>
        <Label label={label} hint={hint} />
        <div className="form-group">
          <input
            className={`form-control ${status}`}
            {...field}
            placeholder={placeholder}
            type={type}
            required={required}
            ref={innerRef}
          />
          <p className="form-hint">{hint}</p>
        </div>
        {touched[field.name] && errors[field.name] && <div className="invalid-feedback d-inline-block">{errors[field.name]}</div>}
      </div>
    </>
  )
}

export default TextInput

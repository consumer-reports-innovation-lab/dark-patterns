import React, { useState } from 'react'
import Label from './label'

const TextArea = ({
  children, className, label, hint, rows, placeholder, type, field, form: { errors, touched },
}) => {
  const status = touched[field.name] && errors[field.name] ? 'is-invalid' : ''

  const [editing, setEditing] = useState(false)

  return (
    <>
      {children && !editing ? (
        <div className="editable" onClick={() => setEditing(true)}>
          {children}
        </div>
      ) : (
        <div className={`form-group ${className}`}>
          <Label label={label} hint={hint} />
          <textarea
            className={`form-control ${status}`}
            {...field}
            placeholder={placeholder}
            rows={rows}
            type={type}
          />
          {touched[field.name] && errors[field.name] && (
            <span className="invalid-feedback">{errors[field.name]}</span>
          )}
        </div>
      )}
    </>
  )
}

export default TextArea

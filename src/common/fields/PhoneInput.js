import React from 'react'
import MaskedInput from 'react-text-mask'
import Label from './label'

const phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

const PhoneInput = ({ className, hint, type, label, placeholder, required, field, form: { errors, touched } }) => {
  const status = touched[field.name] && errors[field.name] ? `is-invalid` : ``

  return (
    <div className={`form-group ${className}`}>
      <Label label={label} hint={hint} />
      <MaskedInput
        mask={phoneMask}
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

export default PhoneInput

import React from 'react'
import PropTypes from 'prop-types'
import Label from './label'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

const defaultMaskOptions = {
  prefix: '$',
  suffix: '',
  includeThousandsSeparator: false,
  thousandsSeparatorSymbol: ',',
  allowDecimal: true,
  decimalSymbol: '.',
  decimalLimit: 2, // how many digits allowed after the decimal
  integerLimit: 3, // limit length of integer numbers
  requireDecimal: false,
  allowNegative: false,
  allowLeadingZeroes: false
}

const CurrencyInput = ({
  className,
  maskOptions,
  hint,
  type,
  label,
  placeholder,
  required,
  field,
  onChange,
  form: { errors, touched }
}) => {
  const status = touched[field.name] && errors[field.name] ? `is-invalid` : ``
  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
    ...maskOptions
  })
  return (
    <div className={`form-group ${className}`}>
      <Label label={label} hint={hint} />
      <MaskedInput
        mask={currencyMask}
        className={`form-control ${status}`}
        placeholder={placeholder}
        type={type}
        required={required}
        onChange={onChange}
      />
      {touched[field.name] && errors[field.name] && <div className="invalid-feedback">{errors[field.name]}</div>}
    </div>
  )
}

CurrencyInput.propTypes = {
  maskOptions: PropTypes.shape({
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    includeThousandsSeparator: PropTypes.bool,
    thousandsSeparatorSymbol: PropTypes.string,
    allowDecimal: PropTypes.bool,
    decimalSymbol: PropTypes.string,
    decimalLimit: PropTypes.string,
    requireDecimal: PropTypes.bool,
    allowNegative: PropTypes.bool,
    allowLeadingZeroes: PropTypes.bool,
    integerLimit: PropTypes.number
  })
}

export default CurrencyInput

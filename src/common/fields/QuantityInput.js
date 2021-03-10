import React from 'react'
import Label from './label'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

const defaultMaskOptions = {
  prefix: '',
  // suffix: '',
  includeThousandsSeparator: false,
  // thousandsSeparatorSymbol: ',',
  allowDecimal: false,
  // decimalSymbol: '.',
  // decimalLimit: 2, // how many digits allowed after the decimal
  integerLimit: 3, // limit length of integer numbers
  // requireDecimal: true,
  allowNegative: false,
  allowLeadingZeroes: false
}

const QuantityInput = ({
  className,
  hint,
  label,
  placeholder,
  required,
  field,
  onChange,
  maxValue = 99,
  maskOptions,
  form: { errors, touched, setFieldValue }
}) => {
  const status = touched[field.name] && errors[field.name] ? `is-invalid` : ``
  const numberMask = createNumberMask({
    ...defaultMaskOptions,
    ...maskOptions
  })

  function subtractQuantity() {
    if (field.value > 0) {
      setFieldValue(field.name, field.value - 1)
    }
  }
  function addQuantity() {
    if (field.value < maxValue) {
      setFieldValue(field.name, field.value + 1)
    }
  }

  return (
    <div className={`form-group qty-input ${className}`}>
      <Label label={label} hint={hint} />
      <div className="input-group">
        <button onClick={() => subtractQuantity()} className="btn btn-mid" disabled={field.value <= 0}>
          <i className="ri-subtract-line" />
        </button>
        <MaskedInput
          mask={numberMask}
          className={`form-control mt-0 ${status}`}
          {...field}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />

        <button onClick={() => addQuantity()} className="btn btn-mid" disabled={field.value >= maxValue}>
          <i className="ri-add-line" />
        </button>
      </div>
      {touched[field.name] && errors[field.name] && <div className="invalid-feedback">{errors[field.name]}</div>}
    </div>
  )
}

export default QuantityInput

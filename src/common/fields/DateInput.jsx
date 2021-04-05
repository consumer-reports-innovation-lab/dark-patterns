import React, { useState } from 'react'
import Label from './label'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import { SingleDatePicker, DateRangePicker } from 'react-dates';
import {format} from 'date-fns'
import moment from 'moment'

const DateInput = (props) => {
  const { children, className, startDateId = 'startDate', endDateId = 'endDate', isRange = false, hint, label, field, form: { setFieldValue, values, errors, touched } } = props
  const status = touched[field.name] && errors[field.name] ? 'is-invalid' : ''

  const [editing, setEditing] = useState(false)
  const [focusedInput, setFocusedInput] = useState(null);

  const handleDatesChange = ({ startDate, endDate }) => {
    // console.log(startDate && startDate.isValid()
    //   ? new Date(startDate)
    //   : "")
    setFieldValue(startDateId, startDate)
    setFieldValue(endDateId, endDate)
  }

  return (
    <>
      {children && !editing ? (
        <div className="editable" onClick={() => setEditing(true)}>
          {children}
        </div>
      ) : (
          <div className={`form-group ${className}`}>
            <Label label={label} hint={hint} />
            <div className={`input-control ${status}`}>
              {isRange ? (
                <DateRangePicker
                  startDate={values.startDate}
                  startDateId={startDateId}
                  endDate={values.endDate}
                  endDateId={endDateId}
                  onDatesChange={handleDatesChange}
                  focusedInput={focusedInput}
                  onFocusChange={focusedInput => setFocusedInput(focusedInput)}
                />

              ) : (
                  <SingleDatePicker/>
                )}
            </div>
            {touched[field.name] && errors[field.name] && (
              <div className="invalid-feedback">{errors[field.name]}</div>
            )}
          </div>
        )}
    </>
  )
}

export default DateInput
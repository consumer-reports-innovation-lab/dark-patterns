import React, { useState } from 'react'
import CreatableSelect from 'react-select/creatable'
import Label from './label'

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}
const groupBadgeStyles = {
  backgroundColor: '#4c864c',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center'
}

const formatGroupLabel = (data) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
)

const CreateSelect = ({
  children,
  editable,
  className,
  field,
  hint,
  placeholder,
  defaultValue,
  label,
  isMulti,
  isSearchable,
  type,
  onChange,
  options,
}) => {

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
          <div>
            <CreatableSelect
              {...field}
              type={type}
              defaultValue={defaultValue}
              formatGroupLabel={formatGroupLabel}
              onChange={onChange}
              placeholder={placeholder}
              options={options}
              isMulti={isMulti}
              isSearchable={isSearchable}
              isClearable
              className="react-select-container"
              classNamePrefix="react-select"
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary: '#dbecdb',
                  primary25: '#EBECF0',
                  primary50: '#dbecdb',
                  neutral10: '#4c864c',
                  neutral80: '#fff'
                }
              })}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default CreateSelect

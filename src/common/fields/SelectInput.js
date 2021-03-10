import React from 'react'
import Select from 'react-select'
import Label from './label'

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}
const groupBadgeStyles = {
  backgroundColor: '#EBECF0',
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

const selectStyles = {
  control: (provided, state) => ({
    ...provided,
    minHeight: '35px'
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#5fb35f' : 'white'
  }),
  menuList: (provided, state) => ({
    ...provided,
    padding: 0
  }),
  dropdownIndicator: () => ({
    display: 'none'
  }),
  indicatorSeparator: () => ({
    display: 'none'
  })
}

const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
)

const SelectInput = ({
  form,
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
  isClearable
}) => {
  return (
    <div className="form-group">
      <Label label={label} hint={hint} />

      <Select
        {...field}
        type={type}
        defaultValue={defaultValue}
        formatGroupLabel={formatGroupLabel}
        onChange={onChange}
        placeholder={placeholder}
        options={options}
        isMulti={isMulti}
        isSearchable={isSearchable}
        isClearable={isClearable}
        styles={selectStyles}
        theme={theme => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: '#a7a9ac',
            primary: '#5fb35f',
            primary50: '#a7a9ac'
          }
        })}
      />
    </div>
  )
}

export default SelectInput

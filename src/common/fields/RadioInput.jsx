import React from "react";
import { Radio } from 'semantic-ui-react'

const RadioInput = props => {
  const { label, field, type, onChange } = props;
  return (
    <>
      <Radio
        {...field}
        type={type}
        label={label}
        onChange={onChange}
        value={field.value}
      />
    </>  
  );
};

export default RadioInput;

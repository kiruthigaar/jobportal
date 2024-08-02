import React from 'react';
import { useField } from 'formik';
import Select from 'react-select';

const CustomSelect = ({ label, options, ...props }) => {
  const [field, , { setValue }] = useField(props);

  const handleChange = (selectedOptions) => {
    setValue(selectedOptions ? selectedOptions.map(option => option.value) : []);
  };

  return (
    <div>
      <label>{label}</label>
      <Select
        isMulti
        options={options}
        value={options.filter(option => field.value.includes(option.value))}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};

export default CustomSelect;
import React from "react";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";

const DropdownComponent = ({ label, value, options, onChange }) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Select value={value} onChange={onChange}>
        <option value="" selected disabled>
          Select
        </option>
        {options?.map((option, index) => (
          <option key={index} value={option.id}>
            {option.class_name}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropdownComponent;

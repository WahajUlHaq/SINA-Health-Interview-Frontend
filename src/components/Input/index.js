import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const InputComponent = ({ label, value, name, onChange }) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input type="text" name={name} value={value} onChange={onChange} />
    </FormControl>
  );
};

export default InputComponent;

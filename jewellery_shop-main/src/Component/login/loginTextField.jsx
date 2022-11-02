import React from 'react'
import { TextField } from '@mui/material'
import { useField } from 'formik'
export default function LoginTextField({
    name,
    ...otherPorps
}) {
    const [field, mata] = useField(name);

  const configTextfield = {
    ...field,
    ...otherPorps,
    fullWidth: true,
    variant: 'outlined',
    error:false,
    helperText :"",
  };
  // (configTextfield)
  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }
  return (
  
        <TextField {...configTextfield} />

  )
}
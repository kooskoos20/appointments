import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import PropTypes from 'prop-types';


const FormField = ({id, label, name, value, autoComplete, 
                    onChange, autoFocus, type}) => {
  return (
    <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor={id}>{label}</InputLabel>
              <Input id={id} name={name} value={value} 
                     autoComplete={autoComplete} 
                     autoFocus={autoFocus} onChange={onChange}
                     type={type}/>
    </FormControl>
  )
}

FormField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value:PropTypes.string.isRequired,
  autoComplete: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string
};

FormField.defaultProps = {
  autoFocus: false
};

export default FormField;
import { forwardRef } from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';

const TextField = forwardRef((props, ref) => {
	const {
		label,
    required = false,
		inputProps,
		helperText,
		error = false,
	} = props;

  return (
    <FormControl 
      ref={ref}
      error={error}
    >
      <FormLabel 
        required={required}
      >
        {label}
      </FormLabel>
      <Input 
        {...inputProps}
        required={required}
      />
      <FormHelperText>
        {helperText}
      </FormHelperText>
    </FormControl>
  );
});

TextField.displayName = 'TextField';

export default TextField;
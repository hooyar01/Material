import { TextField, type TextFieldProps } from '@mui/material';
import { useField } from 'formik';

interface Props extends TextFieldProps<'standard'> {
  label: string;
  name: string;
}

const FormikTextField = ({ label, name, ...rest }: Props) => {
  const [field, meta] = useField(name);

  return (
    <TextField
      label={label}
      fullWidth
      margin="normal"
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      {...field}
      {...rest}
    />
  );
};

export default FormikTextField;



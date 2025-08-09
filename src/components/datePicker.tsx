import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useField } from 'formik';
import type { TextFieldProps } from '@mui/material';

interface Props {
  name: string;
  label: string;
  textFieldProps?: TextFieldProps;
}

const DatePickerField = ({ name, label, textFieldProps }: Props) => {
  const [field, meta, helpers] = useField(name);

  return (
    <DatePicker
      label={label}
      value={field.value || null}
      onChange={(val) => helpers.setValue(val)}
      slotProps={{
        textField: {
          fullWidth: true,
          margin: 'normal',
          error: meta.touched && Boolean(meta.error),
          helperText: meta.touched && meta.error,
          ...textFieldProps,
        },
      }}
    />
  );
};

export default DatePickerField;

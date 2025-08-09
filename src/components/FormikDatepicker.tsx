
import { useField, useFormikContext } from 'formik';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

interface Props {
  name: string;
  label: string;
}

const FormikDatePicker = ({ name, label }: Props) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        value={field.value || null}
        onChange={(value) => {
          setFieldValue(name, value);
        }}
        slotProps={{
          textField: {
            fullWidth: true,
            margin: 'normal',
            error: Boolean(meta.touched && meta.error),
            helperText: meta.touched && meta.error,
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default FormikDatePicker;


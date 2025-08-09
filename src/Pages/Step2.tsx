import { Button, Typography, Box, } from '@mui/material';
import { Formik, Form,  } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import FormikTextField from '../components/FormikTextField'; 
import DatePickerField from '../components/datePicker';



const Step2 = () => {
  const navigate = useNavigate();

  return (
    <Box maxWidth={500} mx="auto">
      <Typography variant="h6" gutterBottom>
        اطلاعات هویتی
      </Typography>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          birthday: null,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required('نام الزامی است'),
          lastName: Yup.string().required('نام خانوادگی الزامی است'),
          birthday: Yup.date().nullable().required('تاریخ تولد الزامی است'),
        })}
        onSubmit={(values) => {
          console.log('✅ داده‌های Step2:', values);
          navigate('/step3');
        }}
      >
        <Form>
          <FormikTextField name="firstName" label="نام" />
          <FormikTextField name="lastName" label="نام خانوادگی" />
          <DatePickerField name="birthday" label="تاریخ تولد" />
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            بعدی
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default Step2;
import { Button, Typography, Box } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikTextField from '../components/FormikTextField';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../context/FormContext';
  
const {  setData} = useFormContext()
const Step1 = () => {
  const navigate = useNavigate();

  return (
    <Box maxWidth={500} mx="auto">
      <Typography variant="h6" gutterBottom>
        اطلاعات حساب کاربری
      </Typography>

      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={Yup.object({
          username: Yup.string()
            .min(4, 'حداقل ۴ کاراکتر')
            .matches(/^[a-zA-Z0-9_]+$/, 'فقط حروف و اعداد و آندرلاین مجاز است')
            .required('نام کاربری الزامی است'),
          email: Yup.string().email('ایمیل نامعتبر است').required('ایمیل الزامی است'),
          password: Yup.string().min(8).max(128).required('رمز عبور الزامی است'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'رمز عبور مطابقت ندارد')
            .required('تکرار رمز عبور الزامی است'),
        })}
        onSubmit={(values) => {
        setData((prev) => ({ ...prev, ...values }));
          navigate('/step2');
        }}
      >
        <Form>
          <FormikTextField name="username" label="نام کاربری" />
          <FormikTextField name="email" label="ایمیل" />
          <FormikTextField name="password" label="رمز عبور" type="password" />
          <FormikTextField name="confirmPassword" label="تکرار رمز عبور" type="password" />

          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            بعدی
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default Step1;


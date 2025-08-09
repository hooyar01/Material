
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../context/FormContext';
import FormikTextField from '../components/FormikTextField';



const AccountInfo = () => {
  const { data, setData } = useFormContext();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        username: data.username,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      }}
      validationSchema={Yup.object({
        username: Yup.string().min(4).required(),
        email: Yup.string().email().required(),
        password: Yup.string().min(8).required(),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password')], 'رمز عبور یکسان نیست')
          .required(),
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
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          ادامه
        </Button>
      </Form>
    </Formik>
  );
};

export default AccountInfo;

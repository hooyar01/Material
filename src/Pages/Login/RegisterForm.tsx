import { useState } from 'react';
import { Button, Card, CardContent, Typography, CircularProgress } from '@mui/material';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import FormikTextField from '../../components/FormikTextField';
import * as Yup from 'yup';
import { useRegister } from '../../api/useLogin';

interface RegisterFormValues {
  username: string;
  password: string;
}

const RegisterForm = () => {
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useRegister();

  const [errorMessage, setErrorMessage] = useState('');

  const initialValues: RegisterFormValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .min(4, 'حداقل ۴ کاراکتر')
      .matches(/^[a-zA-Z0-9_]+$/, 'فقط حروف و اعداد و آندرلاین مجاز است')
      .required('نام کاربری الزامی است'),
    password: Yup.string()
      .min(8, 'حداقل ۸ کاراکتر')
      .max(128, 'حداکثر ۱۲۸ کاراکتر')
      .required('رمز عبور الزامی است'),
  });

  return (
    <Card sx={{ maxWidth: 400, margin: '2rem auto' }}>
      <CardContent>
        <Typography variant="h5">ورود به سامانه</Typography>

        <Formik
          initialValues={initialValues}
          onSubmit={async (values, actions) => {
            try {
              await mutateAsync(values);
              setErrorMessage('');
              navigate('/posts');
            } catch (error) {
              setErrorMessage('❌ خطا در ارتباط با سرور. لطفاً دوباره تلاش کنید.');
            } finally {
              actions.setSubmitting(false);
            }
          }}
          validationSchema={validationSchema}
        >
          <Form>
            <FormikTextField label="نام کاربری" name="username" />
            <FormikTextField label="گذرواژه" name="password" type="password" />

            {isPending ? (
              <Typography sx={{ mt: 2 }} color="primary">
                <CircularProgress size={24} sx={{ mr: 1 }} />
                لطفاً منتظر بمانید...
              </Typography>
            ) : (
              <Button fullWidth variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
                ورود
              </Button>
            )}
            {errorMessage && (
              <Typography color="error" sx={{ mt: 2, fontSize: '0.875rem' }}>
                {errorMessage}
              </Typography>
            )}
          </Form>
        </Formik>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;


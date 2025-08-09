
import { Card, CardContent, Typography, Button } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikTextField from '../../components/FormikTextField'
const validationSchema = Yup.object({
  Username: Yup.string().required('نام کاربری الزامی است'),
  Email: Yup.string().required("ایمیل الزامی است "),
  Password: Yup.string().min(6).required('رمز عبور الزامی است'),
  ConfirmPassword: Yup.string().min(6).required("تایید رمز عبور الزامی است"),
});
const RegisterForm = () => {
  return (
    <Card sx={{ maxWidth: 400, margin: 'auto', mt: 5 }}>
      <CardContent>
        
        <Typography variant="h6" gutterBottom>
          فرم ثبت‌نام
        </Typography>

        <Formik
          initialValues={{ Username: '', Email: '', Password: '',ConfirmPassword:'' }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log('✅ اطلاعات ثبت‌شده:', values);
            alert(`فرم ثبت شد:\n${JSON.stringify(values, null, 2)}`);
          }}
        >
          <Form>
            <FormikTextField label="نام کاربری"name="Username" />
            <FormikTextField label="ایمیل"name="Email" />
            <FormikTextField label="رمز عبور" name="Password" type="password" />
            <FormikTextField label='تایید رمز عبور' name='Password' type="password"/>

            <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
              ثبت فرم
            </Button>
          </Form>
        </Formik>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;


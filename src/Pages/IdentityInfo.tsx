// src/pages/IdentityInfo.tsx
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../context/FormContext';
import FormikTextField from '../components/FormikTextField';
import FormikDatePicker from '../components/FormikDatepicker';

const IdentityInfo = () => {
  const { data , setData } = useFormContext(); // ✅ اصلاح نام‌ها
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        firstName: data.firstName,
        lastName: data.lastName,
        birthday: data.birthday,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required('نام الزامی است'),
        lastName: Yup.string().required('نام خانوادگی الزامی است'),
        birthday: Yup.string().required('تاریخ تولد الزامی است'),
      })}
      onSubmit={(values) => {
        setData((prev) => ({ ...prev, ...values }));
        navigate('/step3');
      }}
    >
      <Form>
        <FormikTextField name="firstName" label="نام" />
        <FormikTextField name="lastName" label="نام خانوادگی" />
        <FormikDatePicker name="birthday" label="تاریخ تولد" />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          ادامه
        </Button>
      </Form>
    </Formik>
  );
};

export default IdentityInfo;


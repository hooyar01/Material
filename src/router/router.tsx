
// src/router/router.tsx
import { createBrowserRouter } from 'react-router-dom';
import StepperLayout from '../components/StepperLayout';
import Step1 from '../Pages/Step1';
import Step2 from '../Pages/Step2';
import Step3 from '../Pages/Step3';
import RegisterForm from '../Pages/Login/RegisterForm';
import PostList from '../Pages/Posts/PostList';
import { Navigate } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <StepperLayout />,
    children: [
        { index: true, element: <Navigate to="/step1" replace /> },
      { path: 'step1', element: <Step1 /> },
      { path: 'step2', element: <Step2 /> },
      { path: 'step3', element: <Step3 /> },
    ],
  },
  {
    path: '/login',
    element: <RegisterForm />,
  },
  {
    path: '/posts',
    element: <PostList />,
  },
]);

export default router;


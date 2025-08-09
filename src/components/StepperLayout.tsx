
import { Stepper, Step, StepLabel, Container, Box } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';

const steps = [
  { path: '/step1', label: 'اطلاعات حساب' },
  { path: '/step2', label: 'اطلاعات هویتی' },
  { path: '/step3', label: 'تأیید نهایی' },
];

const StepperLayout = () => {
  const location = useLocation();
  const activeStep = steps.findIndex((step) => location.pathname.includes(step.path));

  return (
    <Container maxWidth="sm">
      <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
        {steps.map((step) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box>
        <Outlet />
      </Box>
    </Container>
  );
};

export default StepperLayout;


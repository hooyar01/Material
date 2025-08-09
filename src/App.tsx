// App.tsx
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import EmotionCacheProvider from './theme/EmotionCacheProvider';
import ThemeProvider from './theme/ThemeProvider';
import QueryClientProvider from './api/ReactQueryProvider';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FormProvider } from './context/FormContext';

function App() {
  return (
    <React.StrictMode>
      <EmotionCacheProvider>
        <ThemeProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <QueryClientProvider>
              <FormProvider>
              <RouterProvider router={router} />
              </FormProvider>
            </QueryClientProvider>
          </LocalizationProvider>
        </ThemeProvider>
      </EmotionCacheProvider>
    </React.StrictMode>
  );
}

export default App;








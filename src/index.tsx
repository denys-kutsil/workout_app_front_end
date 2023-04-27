import React from 'react';

import { ThemeProvider } from '@mui/material';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from '@/components';
import { theme } from '@/constants';
import store from '@/redux';
import { App } from '@/views';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as Element);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
);

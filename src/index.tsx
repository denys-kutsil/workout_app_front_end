import React from 'react';

import { ThemeProvider } from '@mui/material';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from '@/components';
import { theme } from '@/constants';
import store from '@/redux';
import { envUtil } from '@/utils';
import { App } from '@/views';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as Element);

const { googleClientID } = envUtil.getEnv();

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <GoogleOAuthProvider clientId={googleClientID}>
            <App />
          </GoogleOAuthProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
);

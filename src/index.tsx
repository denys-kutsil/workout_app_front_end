import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { App } from '@/views';
import { theme } from '@/constants';
import store from '@/redux';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as Element);

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </BrowserRouter>,
);

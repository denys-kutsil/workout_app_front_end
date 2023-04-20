import React from 'react';

import { Container } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './styles';

import { BackgroundDecorationBottomIcon, BackgroundDecorationTopIcon } from '@/components';
import AppRouter from '@/router';

const App = () => (
  <Container maxWidth="md">
    <BackgroundDecorationTopIcon style={styles.backgroundTop} />
    <BackgroundDecorationBottomIcon style={styles.backgroundBottom} />
    <AppRouter />
    <ToastContainer />
  </Container>
);

export default App;

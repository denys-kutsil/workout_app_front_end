import { Container } from '@mui/material';
import React from 'react';
import { ToastContainer } from 'react-toastify';

import { BackgroundDecorationBottomIcon, BackgroundDecorationTopIcon } from '@/components';
import AppRouter from '@/router';
import 'react-toastify/dist/ReactToastify.css';

import styles from './styles';

const App = () => (
  <Container maxWidth="md">
    <BackgroundDecorationTopIcon style={styles.backgroundTop} />
    <BackgroundDecorationBottomIcon style={styles.backgroundBottom} />
    <AppRouter />
    <ToastContainer />
  </Container>
);

export default App;

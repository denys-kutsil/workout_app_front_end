import { Container } from '@mui/material';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { BackgroundDecorationBottomIcon, BackgroundDecorationTopIcon } from '@/components';
import { WorkoutView, TrackingView, CompleteView, AuthView } from '@/views';

import 'react-toastify/dist/ReactToastify.css';

import styles from './styles';
import useApp from './useApp';

const App = () => {
  useApp();

  return (
    <Container maxWidth="md">
      <BackgroundDecorationTopIcon style={styles.backgroundTop} />
      <BackgroundDecorationBottomIcon style={styles.backgroundBottom} />
      <Routes>
        <Route path="/" element={<WorkoutView />} />
        <Route path="/tracking" element={<TrackingView />} />
        <Route path="/auth" element={<AuthView />} />
        <Route path="/complete" element={<CompleteView />} />
      </Routes>
      <ToastContainer />
    </Container>
  );
};

export default App;

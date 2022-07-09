import { Container } from '@mui/material';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { BackgroundDecorationBottomIcon, BackgroundDecorationTopIcon } from '@/components';
import { WorkoutView, TrackingView, CompleteView } from '@/views';

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
        <Route path="/complete" element={<CompleteView />} />
      </Routes>
    </Container>
  );
};

export default App;

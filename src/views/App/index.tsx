import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { WorkoutView, TrackingView, CompleteView } from '@/views';
import useApp from './useApp';
import styles from './styles';
import { Container } from '@mui/material';

import { BackgroundDecorationBottomIcon, BackgroundDecorationTopIcon } from '@/components';

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

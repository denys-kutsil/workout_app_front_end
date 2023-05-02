import React from 'react';

import { Box, Button, Typography, IconButton } from '@mui/material';

import styles from './styles';
import useWorkoutView from './useWorkoutView';

import { ArrowIcon } from '@/components';

const WorkoutView = () => {
  const { seconds, minutes, categories, goBack, startWorkout } = useWorkoutView();

  return (
    <Box>
      <IconButton sx={styles.arrowIcon} onClick={goBack}>
        <ArrowIcon />
      </IconButton>
      <img src="/assets/images/preview.png" alt="preview-img" width="100%" />
      <Box sx={styles.date}>
        <Typography variant="h5">Day 1</Typography>
        <Typography>Morning Flexibility Routine</Typography>
        <Typography>
          {minutes} min {seconds} sec
        </Typography>
      </Box>
      <Box sx={styles.categories}>
        {categories?.map(([title, exercises], idx) => (
          <Box key={idx} sx={styles.categoryItem}>
            <Typography mb={2} variant="h5">
              {title}
            </Typography>
            <>
              {exercises?.map(({ title, photo, duration, externalId }) => (
                <Box sx={styles.exercise} key={externalId}>
                  <img src={photo} alt="photo" height={64} width={64} />
                  <Box sx={styles.workoutItem}>
                    <Typography variant="h6">{title}</Typography>
                    <Typography variant="h6">{duration} sec</Typography>
                  </Box>
                </Box>
              ))}
            </>
          </Box>
        ))}
      </Box>
      <Box sx={styles.buttonContainer}>
        <Button onClick={startWorkout} color="primary" variant="contained" sx={styles.button}>
          Start Workout
        </Button>
      </Box>
    </Box>
  );
};

export default WorkoutView;

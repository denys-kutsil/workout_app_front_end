import React from 'react';

import { Box, Typography, Button } from '@mui/material';

import styles from './styles';
import useCompleteView from './useCompleteView';

import { CheckIcon } from '@/components';

const CompleteView = () => {
  const { minutes, seconds, saveAndContinue } = useCompleteView();

  return (
    <Box sx={styles.main}>
      <CheckIcon sx={styles.checkIcon} />
      <Typography variant="h3" mt={1}>
        Workout completed!
      </Typography>
      <Typography mt={1}>Nice job. You’re done. Here’s the workout summary.</Typography>
      <Box sx={styles.timeContainerWrapper}>
        <Box sx={styles.timeContainer}>
          <Typography variant="h5">Minutes</Typography>
          <Typography>{minutes}</Typography>
        </Box>
        <Box sx={styles.timeContainer}>
          <Typography variant="h5">Seconds</Typography>
          <Typography>{seconds}</Typography>
        </Box>
      </Box>
      <Button color="primary" variant="contained" sx={styles.btn} onClick={saveAndContinue}>
        Save & Continue
      </Button>
    </Box>
  );
};

export default CompleteView;

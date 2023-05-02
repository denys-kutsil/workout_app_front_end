import React from 'react';

import { Box, Typography, Button, IconButton } from '@mui/material';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import ReactPlayer from 'react-player';

import 'react-circular-progressbar/dist/styles.css';

import { videoConfig } from './constants';
import styles from './styles';
import useTrackingView from './useTrackingView';

import { PauseTrackingIcon, PlayTrackingIcon, PlayPrevIcon, PlayNextIcon } from '@/components';
import { theme } from '@/constants';

const TrackingView = () => {
  const {
    description,
    isPlaying,
    switchNextVisible,
    switchPrevVisible,
    isPreparation,
    title,
    isPaused,
    percentage,
    activeDuration,
    activeColor,
    exercise,
    changeExercise,
    togglePauseStatus,
    onLeaveButtonClick,
  } = useTrackingView();

  return (
    <Box>
      <Typography variant="h4" sx={styles.title}>
        {title}
      </Typography>
      <Box sx={styles.progressContainer}>
        <Button
          sx={{
            ...styles.switchExercise,
            visibility: switchPrevVisible ? 'visible' : `hidden`,
          }}
          onClick={changeExercise(false)}
        >
          <PlayPrevIcon sx={styles.arrowIcon} />
        </Button>
        <Box sx={styles.circularProgressbar}>
          <CircularProgressbar
            value={percentage}
            text={`${activeDuration}`}
            counterClockwise
            styles={buildStyles({
              pathColor: activeColor,
              textColor: activeColor,
              trailColor: theme.palette.grey.A200,
            })}
          />
        </Box>
        <Button
          sx={{
            ...styles.switchExercise,
            visibility: switchNextVisible ? 'visible' : 'hidden',
          }}
          onClick={changeExercise(true)}
        >
          <PlayNextIcon sx={styles.arrowIcon} />
        </Button>
      </Box>
      {isPreparation && exercise ? (
        <Box sx={styles.description}>
          <img src={exercise.photo} style={styles.imagePreview} alt="photo" />
          <Box component="ol" sx={styles.descriptionContainer}>
            <Typography variant="h4">Steps: </Typography>
            {description.map((item, idx) => (
              <Typography variant="h6" mt={1} component="li" key={idx}>
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      ) : (
        <>
          <Box sx={styles.video}>
            <ReactPlayer
              url={exercise?.video ?? ''}
              playing={isPlaying}
              config={videoConfig}
              width="100%"
              height="100%"
              loop
              muted
            />
            {isPaused && (
              <Box sx={styles.pause}>
                <Typography variant="h4" color="white">
                  Workout paused
                </Typography>
                <Typography mt={2}>Press “Play button” or “Space bar” to continue</Typography>
                <Button variant="outlined" onClick={onLeaveButtonClick} sx={styles.leaveButton}>
                  Leave workout
                </Button>
              </Box>
            )}
          </Box>
          <Box sx={styles.footer}>
            <IconButton onClick={togglePauseStatus}>
              {isPaused ? (
                <PlayTrackingIcon sx={styles.playAndPauseIcon} />
              ) : (
                <PauseTrackingIcon sx={styles.playAndPauseIcon} />
              )}
            </IconButton>
          </Box>
        </>
      )}
    </Box>
  );
};

export default TrackingView;

import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { videoConfig } from './constants';
import styles from './styles';
import { Box, Typography, Button } from '@mui/material';
import useTrackingView from './useTrackingView';
import { PauseTrackingIcon, PlayTrackingIcon, PlayPrevIcon, PlayNextIcon } from '@/components';
import { default as _ReactPlayer } from 'react-player';
import { ReactPlayerProps } from 'react-player/types/lib';
const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;

import 'react-circular-progressbar/dist/styles.css';

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
    active,
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
              trailColor: '#EEEEEE',
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
      {isPreparation ? (
        <Box>
          {active?.photo && <img src={active.photo} style={styles.imagePreview} alt="photo" />}
          <Box mt={3}>
            {description.map((item, idx) => (
              <Typography textAlign="center" component="li" key={idx}>
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      ) : (
        <>
          <Box sx={styles.video}>
            <ReactPlayer
              url={active?.video ?? ''}
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
            <Box onClick={togglePauseStatus} sx={styles.playAndPause}>
              {isPaused ? (
                <PlayTrackingIcon sx={styles.playAndPauseIcon} />
              ) : (
                <PauseTrackingIcon sx={styles.playAndPauseIcon} />
              )}
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default TrackingView;

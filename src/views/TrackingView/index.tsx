import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';
import { PauseTrackingButton, PlayNextIcon, PlayPrevIcon, PlayTrackingButton } from '@/icons';
import {
  CircularProgressbarContainer,
  FooterContainer,
  ImagePreview,
  LeaveButton,
  MainContainer,
  PauseButtonContainer,
  PauseContainer,
  ProgressContainer,
  SwitchExerciseButton,
  TitleContainer,
} from './styled-components';
import useTrackingView from './useTrackingView';

const TrackingView = () => {
  const {
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
    onLeaveButtonClick,
    togglePauseStatus,
  } = useTrackingView();

  return (
    <MainContainer>
      <TitleContainer>{title}</TitleContainer>
      <ProgressContainer>
        <SwitchExerciseButton visible={switchPrevVisible} onClick={changeExercise(false)}>
          <PlayPrevIcon />
        </SwitchExerciseButton>
        <CircularProgressbarContainer>
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
        </CircularProgressbarContainer>
        <SwitchExerciseButton visible={switchNextVisible} onClick={changeExercise(true)}>
          <PlayNextIcon />
        </SwitchExerciseButton>
      </ProgressContainer>
      {active?.photo && (
        <ImagePreview image={active.photo}>
          {isPaused && (
            <PauseContainer>
              <h1>Workout paused</h1>
              <h2>Press “Play button” or “Space bar” to continue</h2>
              <LeaveButton onClick={onLeaveButtonClick}>Leave workout</LeaveButton>
            </PauseContainer>
          )}
        </ImagePreview>
      )}
      {!isPreparation && (
        <FooterContainer>
          <PauseButtonContainer onClick={togglePauseStatus}>
            {isPaused ? <PlayTrackingButton /> : <PauseTrackingButton />}
          </PauseButtonContainer>
        </FooterContainer>
      )}
    </MainContainer>
  );
};

export default TrackingView;

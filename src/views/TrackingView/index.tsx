import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { PauseTrackingButton, PlayNextIcon, PlayPrevIcon, PlayTrackingButton } from '@/icons';
import {
  MainContainer,
  TitleContainer,
  ProgressContainer,
  SwitchExerciseButton,
  CircularProgressbarContainer,
  ImagePreview,
  PauseContainer,
  LeaveButton,
  FooterContainer,
  PauseButtonContainer,
} from './styled-components';
import useTrackingView from './useTrackingView';

const TrackingView = () => {
  const {
    title,
    isPause,
    exercisesList,
    isTrackPlaying,
    percentage,
    activeDuration,
    activeColor,
    activeExercise,
    exerciseIndex,
    changeExercise,
    onLeaveButtonClick,
    setPause,
  } = useTrackingView();

  return (
    <MainContainer>
      <TitleContainer>{title}</TitleContainer>
      <ProgressContainer>
        <SwitchExerciseButton visible={exerciseIndex !== 0} onClick={changeExercise(false)}>
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
        <SwitchExerciseButton
          visible={exerciseIndex !== exercisesList.length - 1}
          onClick={changeExercise(true)}
        >
          <PlayNextIcon />
        </SwitchExerciseButton>
      </ProgressContainer>
      <ImagePreview image={activeExercise?.photo ?? ''}>
        {isPause && (
          <PauseContainer>
            <h1>Workout paused</h1>
            <h2>Press “Play button” or “Space bar” to continue</h2>
            <LeaveButton onClick={onLeaveButtonClick}>Leave workout</LeaveButton>
          </PauseContainer>
        )}
      </ImagePreview>
      {isTrackPlaying && (
        <FooterContainer>
          <PauseButtonContainer onClick={() => setPause(!isPause)}>
            {isPause ? <PlayTrackingButton /> : <PauseTrackingButton />}
          </PauseButtonContainer>
        </FooterContainer>
      )}
    </MainContainer>
  );
};

export default TrackingView;

import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import ReactPlayer from 'react-player';
import { videoConfig } from './constants';
import { PauseTrackingButton, PlayNextIcon, PlayPrevIcon, PlayTrackingButton } from '@/icons';
import {
  CircularProgressbarContainer,
  DescriptionItem,
  Descriptions,
  FooterContainer,
  ImagePreview,
  LeaveButton,
  MainContainer,
  PauseButtonContainer,
  PauseContainer,
  ProgressContainer,
  SwitchExerciseButton,
  TitleContainer,
  VideoContainer,
} from './styled-components';
import useTrackingView from './useTrackingView';
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
      {isPreparation ? (
        <div>
          {active?.photo && <ImagePreview src={active.photo} />}
          <Descriptions>
            {description.map((item, idx) => (
              <DescriptionItem key={idx}>{item}</DescriptionItem>
            ))}
          </Descriptions>
        </div>
      ) : (
        <>
          <VideoContainer>
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
              <PauseContainer>
                <h1>Workout paused</h1>
                <h2>Press “Play button” or “Space bar” to continue</h2>
                <LeaveButton onClick={onLeaveButtonClick}>Leave workout</LeaveButton>
              </PauseContainer>
            )}
          </VideoContainer>
          <FooterContainer>
            <PauseButtonContainer onClick={togglePauseStatus}>
              {isPaused ? <PlayTrackingButton /> : <PauseTrackingButton />}
            </PauseButtonContainer>
          </FooterContainer>
        </>
      )}
    </MainContainer>
  );
};

export default TrackingView;

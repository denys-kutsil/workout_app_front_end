import React from 'react';
import { CheckIcon } from '@/icons';
import { PrimaryButton } from '@/components';
import {
  MainContainer,
  TimeContainerWrapper,
  TimeContainer,
  DurationContainer,
} from './styled-components';
import useCompleteView from './useCompleteView';

const CompleteView = () => {
  const { minutes, seconds, history } = useCompleteView();

  return (
    <MainContainer>
      <CheckIcon />
      <h1>Workout completed!</h1>
      <h2>Nice job. You’re done. Here’s the workout summary.</h2>
      <TimeContainerWrapper>
        <TimeContainer>
          <h3>Minutes</h3>
          <DurationContainer>{minutes}</DurationContainer>
        </TimeContainer>
        <TimeContainer>
          <h3>Seconds</h3>
          <DurationContainer>{seconds}</DurationContainer>
        </TimeContainer>
      </TimeContainerWrapper>
      <PrimaryButton onClick={() => history.push('/')}>Save & Continue</PrimaryButton>
    </MainContainer>
  );
};

export default CompleteView;

import React from 'react';
import { PrimaryButton } from '@/components';
import { previewImg } from '@/assets/images';
import { ArrowIcon } from '@/icons';

import {
  MainContainer,
  ArrowIconWrapper,
  DataContainer,
  CategoriesContainer,
  CategoryItemContainer,
  TitleContainer,
  WorkoutItem,
  WorkoutItemData,
  ButtonContainer,
  ImagePreview,
} from './styled-components';
import useWorkoutView from './useWorkoutView';

const WorkoutView = () => {
  const { seconds, history, minutes, data } = useWorkoutView();

  return (
    <MainContainer>
      <ArrowIconWrapper onClick={() => history.goBack()}>
        <ArrowIcon />
      </ArrowIconWrapper>
      <ImagePreview src={previewImg} alt="*" />
      <DataContainer>
        <h2>Day 1</h2>
        <h1>Morning Flexibility Routine</h1>
        <h3>
          {minutes} min {seconds} sec
        </h3>
      </DataContainer>
      <CategoriesContainer>
        {data.map(({ title, exercises }, idx) => (
          <CategoryItemContainer key={idx}>
            <TitleContainer>{title}</TitleContainer>
            <>
              {exercises.map(({ title, photo, duration, id }) => (
                <WorkoutItem key={id}>
                  <img src={photo} alt="*" />
                  <WorkoutItemData>
                    <h1>{title}</h1>
                    <h2>{duration} sec</h2>
                  </WorkoutItemData>
                </WorkoutItem>
              ))}
            </>
          </CategoryItemContainer>
        ))}
      </CategoriesContainer>
      <ButtonContainer>
        <PrimaryButton onClick={() => history.push('/tracking')}>Start Workout</PrimaryButton>
      </ButtonContainer>
    </MainContainer>
  );
};

export default WorkoutView;

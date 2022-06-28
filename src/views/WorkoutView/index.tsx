import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { IRootState } from "@/redux/reducers";
import { PrimaryButton } from "@/components";
import { previewImg } from "@/assets/images";
import { ArrowIcon } from "@/icons";

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
} from "./styled-components";

const WorkoutView = () => {
  const history = useHistory();
  const { data } = useSelector((state: IRootState) => state.workouts);
  const { duration: statusDuration } = useSelector(
    (state: IRootState) => state.status
  );
  const minutes = Math.floor(statusDuration / 60);
  const seconds =
    statusDuration > 60 ? statusDuration - minutes * 60 : statusDuration;

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
        <PrimaryButton onClick={() => history.push("/tracking")}>
          Start Workout
        </PrimaryButton>
      </ButtonContainer>
    </MainContainer>
  );
};

export default WorkoutView;

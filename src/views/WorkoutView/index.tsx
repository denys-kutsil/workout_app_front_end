import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { IRootState } from "../../redux/reducers";
import { PrimaryButton } from "../../components";
import { previewImg } from "../../assets/images";
import { ArrowIcon } from "../../icons";

const MainContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-top: 70px;
  @media (max-width: 600px) {
    width: 90%;
  }
`;

const ArrowIconWrapper = styled.div`
	margin-bottom: 24px;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    transition: 0.5s ease transform;
  };
`;

const TitleContainer = styled.div`
  font-size: 16px;
  font-weight: 600;
  font-family: SF-Pro-Text;
	margin-bottom: 20px;
`;

const CategoryItemContainer = styled.div`
  padding: 8px 0 24px 0;
  border-top: 1px solid #EEEEEE;
`;

const WorkoutItemData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 15px;
`;

const CategoriesContainer = styled.div`
  margin-top: 24px;
`;

const WorkoutItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  h1 {
    font-size: 18px;
  };
  h2 {
    font-size: 14px;
    font-family: SF-Pro-Text;
    margin-top: 5px;
  };
  img {
    height: 64px;
    width: 64px;
    border-radius: 12px;
  }
`;

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 30px;
  width: 50%;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: 0.5s ease transform;
  };
  @media (max-width: 600px) {
    width: 90%;
  }
`;

const DataContainer = styled.div`
	padding: 20px 0;
	h2 {
    font-size: 14px;
		font-family: SF-Pro-Text;
  }
	h1 {
		margin: 5px 0;
    font-weight: 600;
    font-size: 24px;
	}
	h3 {
    font-weight: normal;
    font-size: 14px;
    font-family: SF-Pro-Text;
  }
`;

const WorkoutView = () => {
	const history = useHistory();
	const { data } = useSelector((state: IRootState) => state.workouts);
	const { duration } = useSelector((state: IRootState) => state.status);
	const minutes = Math.floor(duration / 60);
	const seconds = duration > 60 ? duration - minutes * 60 : duration;

	const startTracking = () => {
		history.push('/tracking')
	};

	return (
		<MainContainer>
			<ArrowIconWrapper onClick={() => history.goBack()}>
				<ArrowIcon/>
			</ArrowIconWrapper>
			<img src={previewImg} alt="*"/>
			<DataContainer>
				<h2>Day 1</h2>
				<h1>Morning Flexibility Routine</h1>
				<h3>{minutes} min {seconds} sec</h3>
			</DataContainer>
			<CategoriesContainer>
				{data.map(({title, exercises}, idx) => (
					<CategoryItemContainer key={idx}>
						<TitleContainer>{title}</TitleContainer>
						<>
							{exercises.map(({
								title,
								photo,
								duration,
								id
							}) => (
								<WorkoutItem key={id}>
									<img src={photo} alt="*"/>
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
				<PrimaryButton onClick={startTracking}>Start Workout</PrimaryButton>
			</ButtonContainer>
		</MainContainer>
	)
};

export default WorkoutView;
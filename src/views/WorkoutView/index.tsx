import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { IRootState } from "../../redux/reducers";
import { Button } from "../../components";
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

const WorkoutView = () => {
	const history = useHistory();
	const { data } = useSelector((state: IRootState) => state.workouts);

	const startTracking = () => {
		history.push('/tracking')
	};

	return (
		<MainContainer>
			<ArrowIcon/>
			<img src={previewImg} alt="*"/>
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
				<Button onClick={startTracking}>Start Workout</Button>
			</ButtonContainer>
		</MainContainer>
	)
};

export default WorkoutView;
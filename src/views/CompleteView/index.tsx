import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { CheckIcon } from "../../icons";
import { PrimaryButton } from "../../components";
import { IRootState } from "../../redux/reducers";

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 50%;
	height: 100vh;
	text-align: center;
  @media (max-width: 600px) {
    width: 90%;
  }
	h1 {
		margin: 20px 0 16px 0;
    font-weight: 600;
    font-size: 40px;
	}
	h2 {
    font-family: SF-Pro-Text;
    font-weight: normal;
    font-size: 20px;
    opacity: 0.6;
		margin-bottom: 32px;
  }
`;

const DurationContainer = styled.div`
  font-weight: 600;
  font-size: 40px;
	margin-bottom: 35px;
`;

const TimeContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 10px;
`;

const TimeContainerWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

const CompleteView = () => {
	const history = useHistory();
	const { duration } = useSelector((state: IRootState) => state.status);
	const minutes = Math.floor(duration / 60);
	const seconds = duration > 60 ? duration - minutes * 60 : duration;

	return (
		<MainContainer>
			<CheckIcon/>
			<h1>Workout completed!</h1>
			<h2>
				Nice job. You’re done. Here’s the workout summary.
			</h2>
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
			<PrimaryButton onClick={() => history.push('/')}>
				Save & Continue
			</PrimaryButton>
		</MainContainer>
	)
};

export default CompleteView;
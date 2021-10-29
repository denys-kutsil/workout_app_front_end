import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { CheckIcon } from "../../icons";
import { PrimaryButton } from "../../components";
import { IRootState } from "../../redux/reducers";
import {
	MainContainer,
	TimeContainerWrapper,
	TimeContainer,
	DurationContainer
} from "./styled-components";

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
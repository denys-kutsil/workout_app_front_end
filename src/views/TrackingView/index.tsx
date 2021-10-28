import React, { useEffect, useMemo, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import styled from "styled-components";
import 'react-circular-progressbar/dist/styles.css';
import { IRootState } from "../../redux/reducers";
import { setDuration } from "../../redux/status/actions";
import {
	PauseTrackingButton,
	PlayNextIcon,
	PlayPrevIcon,
	PlayTrackingButton
} from "../../icons";

const MainContainer = styled.div`
	width: 40%;
  display: flex;
  flex-direction: column;
	justify-content: space-between;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const ProgressContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
  @media (max-width: 600px) {
    padding: 0 16px;
  }
`;

const PauseButtonContainer = styled.div`
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: 0.5s ease transform;
  };
`;

const FooterContainer = styled.div`
	border-top: 8px solid #EEEEEE;
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-content: center;
	padding: 5px 0;
	background: white;
`;

const CircularProgressbarContainer = styled.div`
	width: 128px;
	height: 128px;
`;

const SwitchExerciseButton = styled.button`
  visibility: ${(props: {visible : boolean} ) => (props.visible ? 'visible' : `hidden`)};
  width: 80px;
	height: 50px;
  border: 2px solid #AA00FF;
  border-radius: 8px;
	background: transparent;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: 0.5s ease transform;
  };
`;

const ImagePreview = styled.div`
  background-image: ${(props: {image : string} ) => `url(${props.image})`};
  width: 100%;
  height: 450px;
  border-radius: 8px;
	background-size: cover;
	margin-top: 32px;
`;

const PauseContainer = styled.div`
	width: 100%;
	height: 100%;
  background: rgb(33,33,33, 0.6);	
  border-radius: 8px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	h1 {
		font-family: SF-Pro-Display;
		color: white;
    font-weight: 600;
    font-size: 24px;
	};
	h2 {
    font-family: SF-Pro-Text;
    font-weight: normal;
    font-size: 16px;
		color: white;
		margin: 8px 0 32px 0;
	}
`;

const LeaveButton = styled.button`
  border: 2px solid #EEEEEE;
	background: transparent;
  color: #EEEEEE;
  border-radius: 8px;
	width: 250px;
	height: 48px;
  font-weight: 600;
  font-size: 16px;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: 0.5s ease transform;
  };
`;

const TitleContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
  font-weight: 600;
  font-size: 24px;
	padding: 72px 0 32px 0;
`;

const TrackingView = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { data } = useSelector((state: IRootState) => state.workouts);
	const [isPause, setPause] = useState(false);
	const [isTrackPlaying, setTrackPlaying] = useState(false);
	const [activeExerciseIndex, setActiveExerciseIndex] = useState(0);
	const [activeDuration, setActiveDuration] = useState(0);
	const [activeExercise, setActiveExercise] = useState<any>({});
	const [allTime, setAllTime] = useState(5);
	const interval = useRef<any>(null);

	const exercisesList = useMemo(() =>
		data.map(({exercises}) => exercises)
			.reduce((prev, next) => [...prev, ...next]
				, []), [data]);

	const startTracking = (isPreparation = false) => {

		const setDurationFunc = (duration: number) => {
			if (duration - 1 <= 0) {
				clearInterval(interval.current)
				if (isPreparation) {
					setTrackPlaying(true);
				} else {
					dispatch(setDuration(activeExercise.duration));
					if (activeExerciseIndex === exercisesList.length - 1) {
						history.push('/complete');
					}
					setActiveExerciseIndex(index => index + 1)
				}
			}
			return duration - 1;
		}

		interval.current = setInterval(() => {
			setActiveDuration(setDurationFunc)
		}, 1000);
	};

	const changeTime = (isPreparation: boolean = false) => {
		const duration = isPreparation ? 5 : activeExercise.duration;
		setAllTime(duration)
		setActiveDuration(duration)
	}

	useEffect(() => {
		if (isTrackPlaying) {
			changeTime()
			startTracking()
		}
	}, [isTrackPlaying])

	useEffect(() => {
		if (!exercisesList.length) return;
		setActiveExercise(exercisesList[activeExerciseIndex]);
		if (isTrackPlaying) setTrackPlaying(false);

		changeTime(true);
		startTracking(true);
	}, [activeExerciseIndex, exercisesList]);

	useEffect(() => {
		if (!isTrackPlaying) return;
		clearInterval(interval.current)
		if (!isPause) startTracking()
	}, [isPause])


	const changeExercise = (next: boolean) => {
		clearInterval(interval.current);
		setTrackPlaying(false);
		if (isPause) setPause(false);
		dispatch(setDuration(allTime - activeDuration));
		setActiveExerciseIndex(activeExerciseIndex + (next ? 1 : -1));
	};

	const onLeaveButtonClick = () => {
		dispatch(setDuration(allTime - activeDuration));
		history.push('/complete');
	}

	const percentage = activeDuration * 100 / allTime;

	return (
		<MainContainer>
			<TitleContainer>
				{isTrackPlaying ? activeExercise?.title : 'Get Ready'}
			</TitleContainer>
			<ProgressContainer>
				<SwitchExerciseButton
					visible={activeExerciseIndex !== 0}
					onClick={() => changeExercise(false)}
				>
					<PlayPrevIcon/>
				</SwitchExerciseButton>
				<CircularProgressbarContainer>
					<CircularProgressbar
						value={percentage}
						text={`${activeDuration}`}
						counterClockwise
						styles={buildStyles({
							pathColor: isTrackPlaying ? "rgba(255, 64, 129, 1)" : "rgba(29, 233, 182, 1)",
							textColor: isTrackPlaying ? "rgba(255, 64, 129, 1)" :"rgba(29, 233, 182, 1)",
							trailColor: "#EEEEEE"
						})}
					/>
				</CircularProgressbarContainer>
					<SwitchExerciseButton
						visible={activeExerciseIndex !== exercisesList.length - 1}
						onClick={() => changeExercise(true)}
					>
						<PlayNextIcon/>
					</SwitchExerciseButton>
			</ProgressContainer>
			<ImagePreview image={activeExercise?.photo}>
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
						{isPause ? <PlayTrackingButton/> : <PauseTrackingButton/>}
					</PauseButtonContainer>
				</FooterContainer>
			)}
		</MainContainer>
	)
};

export default TrackingView;
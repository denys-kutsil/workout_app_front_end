import React, { useEffect, useMemo, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { IRootState } from "../../redux/reducers";
import { setDuration } from "../../redux/status/actions";
import { ExerciseType } from "../../redux/workouts/types";
import {
	PauseTrackingButton,
	PlayNextIcon,
	PlayPrevIcon,
	PlayTrackingButton
} from "../../icons";
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
	PauseButtonContainer
} from "./styled-components";

const TrackingView = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { data } = useSelector((state: IRootState) => state.workouts);
	const [isPause, setPause] = useState(false);
	const [isTrackPlaying, setTrackPlaying] = useState(false);
	const [exerciseIndex, setExerciseIndex] = useState(0);
	const [activeDuration, setActiveDuration] = useState(0);
	const [activeExercise, setActiveExercise] = useState<ExerciseType| null>();
	const [allTime, setAllTime] = useState(5);
	const interval = useRef<any>(null);

	const exercisesList = useMemo(() =>
		data.map(({exercises}) => exercises)
			.reduce((prev, next) => [...prev, ...next]
				, []), [data]);

	const startTracking = (isPreparation = false) => {
		const finishTracking = () => {
			clearInterval(interval.current)
			if (isPreparation) {
				setTrackPlaying(true);
			} else {
				dispatch(setDuration(activeExercise?.duration ?? 0));
				if (exerciseIndex === exercisesList.length - 1) {
					history.push('/complete');
				}
				setExerciseIndex(index => index + 1)
			}
		};

		const setDurationFunc = (duration: number) => {
			if (duration - 1 <= 0) finishTracking();
			return duration - 1;
		};

		interval.current = setInterval(() => {
			setActiveDuration(setDurationFunc)
		}, 1000);
	};

	const changeTime = (isPreparation: boolean = false) => {
		const duration = isPreparation ? 5 : activeExercise?.duration ?? 0;
		setAllTime(duration)
		setActiveDuration(duration)
	};

	const changeExercise = (next: boolean) => {
		clearInterval(interval.current);
		setTrackPlaying(false);
		if (isPause) setPause(false);
		if (isTrackPlaying) dispatch(setDuration(allTime - activeDuration));
		setExerciseIndex(exerciseIndex + (next ? 1 : -1));
	};

	const onLeaveButtonClick = () => {
		dispatch(setDuration(allTime - activeDuration));
		history.push('/complete');
	};

	useEffect(() => {
		if (exercisesList.length) {
			setActiveExercise(exercisesList[exerciseIndex]);
			if (isTrackPlaying) setTrackPlaying(false);
			changeTime(true);
			startTracking(true);
		}
	}, [exerciseIndex, exercisesList]);

	useEffect(() => {
		if (isTrackPlaying) {
			changeTime();
			startTracking();
		}
	}, [isTrackPlaying]);

	useEffect(() => {
		if (isTrackPlaying) {
			clearInterval(interval.current);
			if (!isPause) startTracking();
		}
	}, [isPause]);

	const percentage = activeDuration * 100 / allTime;
	const activeColor = isTrackPlaying ? "rgba(255, 64, 129, 1)" : "rgba(29, 233, 182, 1)";

	return (
		<MainContainer>
			<TitleContainer>
				{isTrackPlaying ? activeExercise?.title : 'Get Ready'}
			</TitleContainer>
			<ProgressContainer>
				<SwitchExerciseButton
					visible={exerciseIndex !== 0}
					onClick={() => changeExercise(false)}
				>
					<PlayPrevIcon/>
				</SwitchExerciseButton>
				<CircularProgressbarContainer>
					<CircularProgressbar
						value={percentage}
						text={`${activeDuration}`}
						counterClockwise
						styles={
							buildStyles({
								pathColor: activeColor,
								textColor: activeColor,
								trailColor: "#EEEEEE"
						})}
					/>
				</CircularProgressbarContainer>
					<SwitchExerciseButton
						visible={exerciseIndex !== exercisesList.length - 1}
						onClick={() => changeExercise(true)}
					>
						<PlayNextIcon/>
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
						{isPause ? <PlayTrackingButton/> : <PauseTrackingButton/>}
					</PauseButtonContainer>
				</FooterContainer>
			)}
		</MainContainer>
	)
};

export default TrackingView;
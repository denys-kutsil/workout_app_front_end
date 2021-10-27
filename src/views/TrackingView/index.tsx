import React, {useEffect, useMemo, useRef, useState} from "react";
import { useSelector } from "react-redux";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import styled from "styled-components";
import 'react-circular-progressbar/dist/styles.css';
import { IRootState } from "../../redux/reducers";
import { PauseTrackingButton, PlayNextIcon, PlayPrevIcon, PlayTrackingButton } from "../../icons";

const MainContainer = styled.div`
	width: 50%;
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const PauseButtonContainer = styled.div`
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
`;

const TrackingView = () => {
	const { data } = useSelector((state: IRootState) => state.workouts);
	const [isPause, setPause] = useState(false);
	const [startTracking, setStartTracking] = useState(false);
	const [startPreparationInterval, setPreparationInterval] = useState(false);
	const [activeGroupIndex, setActiveGroupIndex] = useState(0);
	const [activeExerciseIndex, setActiveExerciseIndex] = useState(0);
	const [activeDuration, setActiveDuration] = useState(0);
	const [activePhoto, setActivePhoto] = useState('');
	const time = useRef(0);

	const exercisesList = useMemo(() =>
		data.map(({exercises}) => exercises)
			.reduce((prev, next) => [...prev, ...next]
				, []), [data]);

	useEffect(() => {
		if (exercisesList.length) {
			const { duration, photo } = exercisesList[activeExerciseIndex];
			time.current = duration;
			setActivePhoto(photo)
			setPreparationInterval(true);
			setActiveDuration(duration);
		}
	},[activeGroupIndex, activeExerciseIndex, exercisesList]);

	const startTrackingInterval = () => {
		const interval = setInterval(() => {
			setActiveDuration(duration => {
				if (duration - 1 === 0 ) clearInterval(interval)
				return duration - 1;
			})
		}, 1000);
		return () => clearInterval(interval);
	}

	useEffect(() => {
		if (startTracking) startTrackingInterval()
	}, [startTracking]);

	useEffect(() => {
		if (startPreparationInterval) {
			const interval = setInterval(() => {
				setActiveDuration(duration => {
					if (duration - 1 === 0 ) clearInterval(interval)
					return duration - 1;
				})
			}, 1000);
			return () => clearInterval(interval);
		}
	}, [startPreparationInterval])

	const percentage = activeDuration * 100 / time.current;

	return (
		<MainContainer>
			<HeaderContainer>
					<SwitchExerciseButton
							visible={activeExerciseIndex !== 0}
							onClick={() => setActiveExerciseIndex(activeExerciseIndex - 1)}>
						<PlayPrevIcon/>
					</SwitchExerciseButton>
				<CircularProgressbarContainer>
					<CircularProgressbar
						value={percentage}
						text={`${activeDuration}`}
						counterClockwise
						styles={buildStyles({
							pathColor: "rgba(29, 233, 182, 1)",
							textColor: "rgba(29, 233, 182, 1)",
							trailColor: "#EEEEEE"
						})}
					/>
				</CircularProgressbarContainer>
					<SwitchExerciseButton
						visible={activeExerciseIndex !== exercisesList.length - 1}
						onClick={() => setActiveExerciseIndex(activeExerciseIndex + 1)}
					>
						<PlayNextIcon/>
					</SwitchExerciseButton>
			</HeaderContainer>

			<img src={activePhoto}/>
			<PauseButtonContainer>
				<div onClick={() => setPause(!isPause)}>
					{isPause ? <PauseTrackingButton/> : <PlayTrackingButton/>}
				</div>
			</PauseButtonContainer>
		</MainContainer>
	)
};

export default TrackingView;
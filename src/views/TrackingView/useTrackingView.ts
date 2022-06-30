import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ExerciseType } from '@/redux/workouts/types';
import { setDuration } from '@/redux/status/actions';
import { workoutDataSelector } from '@/redux/workouts/selectors';
import { TrackerStatus } from '@/constants';
import { getTrackerStatus } from '@/views/TrackingView/constants';

const useTrackingView = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const workoutData = useSelector(workoutDataSelector);
  const [trackerStatus, setTrackerStatus] = useState<TrackerStatus>(TrackerStatus.Preparation);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [activeDuration, setActiveDuration] = useState(0);
  const [activeExercise, setActiveExercise] = useState<ExerciseType | null>(null);
  const [allTime, setAllTime] = useState(5);
  const interval = useRef<any>(null);

  const { isPlaying, isPaused, isPreparation } = useMemo(
    () => getTrackerStatus(trackerStatus),
    [trackerStatus],
  );

  const exercisesList = useMemo(
    () =>
      workoutData.map(({ exercises }) => exercises).reduce((prev, next) => [...prev, ...next], []),
    [workoutData],
  );

  const startTracking = () => {
    const finishTracking = () => {
      clearInterval(interval.current);
      if (trackerStatus === TrackerStatus.Preparation) {
        setTrackerStatus(TrackerStatus.Playing);
      } else {
        dispatch(setDuration(activeExercise?.duration ?? 0));
        if (exerciseIndex === exercisesList.length - 1) {
          history.push('/complete');
        }
        setExerciseIndex((index) => index + 1);
      }
    };

    const setDurationFunc = (duration: number) => {
      if (duration - 1 <= 0) finishTracking();
      return duration - 1;
    };

    const changeTime = () => {
      const duration = isPreparation ? 5 : activeExercise?.duration ?? 0;
      setAllTime(duration);
      setActiveDuration(duration);
    };

    changeTime();

    interval.current = setInterval(() => {
      setActiveDuration(setDurationFunc);
    }, 1000);
  };

  const changeExercise = (next: boolean) => () => {
    clearInterval(interval.current);
    dispatch(setDuration(allTime - activeDuration));
    setExerciseIndex(exerciseIndex + (next ? 1 : -1));
  };

  const onLeaveButtonClick = () => {
    dispatch(setDuration(allTime - activeDuration));
    history.push('/complete');
  };

  useEffect(() => {
    if (!exercisesList.length) return;

    if (!activeExercise) {
      setActiveExercise(exercisesList[exerciseIndex]);
    }

    if (isPlaying || isPreparation) {
      startTracking();
    } else if (isPaused) {
      clearInterval(interval.current);
    }
  }, [isPlaying, isPaused, isPreparation, exercisesList.length]);

  const togglePauseStatus = () => {
    setTrackerStatus(isPaused ? TrackerStatus.Playing : TrackerStatus.Paused);
  };

  // useEffect(() => {
  //   if (exercisesList.length) {
  //     setActiveExercise(exercisesList[exerciseIndex]);
  //     if (isTrackPlaying) setTrackPlaying(false);
  //     changeTime(true);
  //     startTracking(true);
  //   }
  // }, [exerciseIndex, exercisesList]);

  // useEffect(() => {
  //   if (isTrackPlaying) {
  //     changeTime();
  //     startTracking();
  //   }
  // }, [isTrackPlaying]);
  //
  // useEffect(() => {
  //   if (isTrackPlaying) {
  //     clearInterval(interval.current);
  //     if (!isPause) startTracking();
  //   }
  // }, [isPause]);

  ///////new functional

  // useEffect(() => {
  //   const isPause = trackerStatus === TrackerStatus.Paused;
  //   const isPlaying = trackerStatus === TrackerStatus.Playing;
  //   if (isPlaying) {
  //     changeTime();
  //     startTracking();
  //   }
  //   if (isPlaying) {
  //     clearInterval(interval.current);
  //     if (!isPause) startTracking();
  //   }
  // }, [trackerStatus]);

  const percentage = (activeDuration * 100) / allTime;
  const activeColor = isPlaying ? 'rgba(255, 64, 129, 1)' : 'rgba(29, 233, 182, 1)';
  const title = isPlaying ? activeExercise?.title : 'Get Ready';

  return {
    isPlaying,
    isPaused,
    isPreparation,
    trackerStatus,
    title,
    exercisesList,
    percentage,
    activeDuration,
    activeColor,
    activeExercise,
    exerciseIndex,
    changeExercise,
    onLeaveButtonClick,
    togglePauseStatus,
  };
};

export default useTrackingView;

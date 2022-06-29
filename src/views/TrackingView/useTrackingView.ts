import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ExerciseType } from '@/redux/workouts/types';
import { setDuration } from '@/redux/status/actions';
import { workoutDataSelector } from '@/redux/workouts/selectors';

const useTrackingView = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const workoutData = useSelector(workoutDataSelector);
  const [isPause, setPause] = useState(false);
  const [isTrackPlaying, setTrackPlaying] = useState(false);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [activeDuration, setActiveDuration] = useState(0);
  const [activeExercise, setActiveExercise] = useState<ExerciseType | null>();
  const [allTime, setAllTime] = useState(5);
  const interval = useRef<any>(null);

  const exercisesList = useMemo(
    () =>
      workoutData.map(({ exercises }) => exercises).reduce((prev, next) => [...prev, ...next], []),
    [workoutData],
  );

  const startTracking = useCallback(
    (isPreparation = false) => {
      const finishTracking = () => {
        clearInterval(interval.current);
        if (isPreparation) {
          setTrackPlaying(true);
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

      interval.current = setInterval(() => {
        setActiveDuration(setDurationFunc);
      }, 1000);
    },
    [activeExercise, exercisesList, exerciseIndex, dispatch, history],
  );

  const changeTime = useCallback(
    (isPreparation = false) => {
      const duration = isPreparation ? 5 : activeExercise?.duration ?? 0;
      setAllTime(duration);
      setActiveDuration(duration);
    },
    [activeExercise],
  );

  const changeExercise = (next: boolean) => () => {
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

  const percentage = (activeDuration * 100) / allTime;
  const activeColor = isTrackPlaying ? 'rgba(255, 64, 129, 1)' : 'rgba(29, 233, 182, 1)';
  const title = isTrackPlaying ? activeExercise?.title : 'Get Ready';

  return {
    title,
    isPause,
    exercisesList,
    isTrackPlaying,
    percentage,
    activeDuration,
    activeColor,
    activeExercise,
    exerciseIndex,
    changeExercise,
    onLeaveButtonClick,
    setPause,
  };
};

export default useTrackingView;

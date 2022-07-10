import { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { TrackerStatus } from '@/constants';
import { setTotalDuration } from '@/redux/status/slice';
import { workoutsSelector } from '@/redux/workouts';
import { selectPrevExercise, selectNextExercise } from '@/redux/workouts/slice';

import { getTrackerStatus, splitStrToArrayByTitle } from './constants';

const useTrackingView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { exercises, active, activeIndex } = useSelector(workoutsSelector);
  const [trackerStatus, setTrackerStatus] = useState<TrackerStatus>(TrackerStatus.Preparation);
  const [activeDuration, setActiveDuration] = useState(5);
  const [allTime, setAllTime] = useState(5);
  const interval = useRef<NodeJS.Timeout>();

  const description = useMemo(
    () => splitStrToArrayByTitle(active?.description ?? ''),
    [active?.description],
  );

  const statusToObj = useMemo(() => getTrackerStatus(trackerStatus), [trackerStatus]);

  const { isPlaying, isPaused, isPreparation } = statusToObj;

  const finishTracking = () => {
    clearActiveInterval();
    if (isPreparation) {
      setTrackerStatus(TrackerStatus.Playing);
    } else {
      dispatch(setTotalDuration(active?.duration ?? 0));
      if (activeIndex === exercises.length - 1) {
        navigate('/complete');
      }
      changeExercise(true)();
    }
  };

  const changeExercise = (next: boolean) => () => {
    clearActiveInterval();
    dispatch(setTotalDuration(allTime - activeDuration));

    if (next) {
      dispatch(selectNextExercise());
    } else {
      dispatch(selectPrevExercise());
    }
    setTrackerStatus(TrackerStatus.Preparation);
  };

  const onLeaveButtonClick = () => {
    dispatch(setTotalDuration(allTime - activeDuration));
    navigate('/complete');
  };

  const updateDuration = (init = false) => {
    setActiveDuration((duration: number) => {
      if (init) {
        return isPreparation ? 5 : duration ? duration : active?.duration ?? 0;
      }
      if (duration - 1 <= 0) finishTracking();
      return duration - 1;
    });
  };

  const startTracking = () => {
    if (isPaused) {
      clearActiveInterval();
      return;
    }

    setAllTime(isPlaying ? active?.duration ?? 20 : 5);

    updateDuration(true);

    interval.current = setInterval(() => {
      updateDuration();
    }, 1000);
  };

  useEffect(() => {
    if (!exercises.length) return;
    startTracking();
  }, [trackerStatus, active, exercises.length]);

  const clearActiveInterval = () => {
    clearInterval(interval.current as NodeJS.Timeout);
  };

  const togglePauseStatus = () => {
    setTrackerStatus(isPaused ? TrackerStatus.Playing : TrackerStatus.Paused);
  };

  const percentage = (activeDuration * 100) / allTime;
  const activeColor = isPlaying ? 'rgba(255, 64, 129, 1)' : 'rgba(29, 233, 182, 1)';
  const title = isPlaying ? active?.title : 'Get Ready';
  const switchNextVisible = activeIndex !== exercises.length - 1;
  const switchPrevVisible = activeIndex !== 0;

  return {
    description,
    switchNextVisible,
    switchPrevVisible,
    isPreparation,
    title,
    isPlaying,
    isPaused,
    percentage,
    activeDuration,
    activeColor,
    active,
    statusToObj,
    trackerStatus,
    changeExercise,
    onLeaveButtonClick,
    togglePauseStatus,
  };
};

export default useTrackingView;

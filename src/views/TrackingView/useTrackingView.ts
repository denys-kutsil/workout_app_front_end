import { useEffect, useMemo, useRef, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { getTrackerStatus, splitStrToArrayByTitle, getWorkoutExercises } from './constants';

import { useGetWorkoutsDataQuery } from '@/apis/workouts';
import { ClientRoutes, theme, TrackerStatus } from '@/constants';
import { useActions } from '@/hooks';
import { statusActions } from '@/redux/status';

const useTrackingView = () => {
  const navigate = useNavigate();
  const interval = useRef<NodeJS.Timeout>();
  const { setTotalDuration } = useActions(statusActions);
  const { data: workout } = useGetWorkoutsDataQuery();

  const [trackerStatus, setTrackerStatus] = useState<TrackerStatus>(TrackerStatus.Preparation);
  const [activeDuration, setActiveDuration] = useState(5);
  const [allTime, setAllTime] = useState(5);
  const [activeIndex, setActiveIndex] = useState(0);

  const exercises = useMemo(() => getWorkoutExercises(workout), [workout]);
  const active = exercises?.[activeIndex];

  const description = useMemo(
    () => splitStrToArrayByTitle(active?.description ?? ''),
    [active?.description],
  );

  const statusToObj = useMemo(() => getTrackerStatus(trackerStatus), [trackerStatus]);

  const { isPlaying, isPaused, isPreparation } = statusToObj;

  const percentage = (activeDuration * 100) / allTime;
  const activeColor = isPlaying ? theme.palette.warning.main : theme.palette.success.main;
  const title = isPlaying ? active?.title : 'Get Ready';
  const switchNextVisible = activeIndex !== (exercises?.length ?? 0) - 1;
  const switchPrevVisible = activeIndex !== 0;

  const finishTracking = () => {
    clearActiveInterval();
    if (isPreparation) {
      setTrackerStatus(TrackerStatus.Playing);
    } else {
      setTotalDuration(active?.duration ?? 0);
      if (activeIndex === (exercises?.length ?? 0) - 1) {
        navigate(ClientRoutes.Complete);
      }
      changeExercise(true)();
    }
  };

  const changeExercise = (next: boolean) => () => {
    clearActiveInterval();
    setTotalDuration(allTime - activeDuration);
    setActiveIndex((prev) => (next ? prev + 1 : prev - 1));
    setTrackerStatus(TrackerStatus.Preparation);
  };

  const onLeaveButtonClick = () => {
    setTotalDuration(allTime - activeDuration);
    navigate(ClientRoutes.Complete);
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
    if (!exercises?.length) return;
    startTracking();
  }, [trackerStatus, active, exercises?.length]);

  const clearActiveInterval = () => {
    clearInterval(interval.current as NodeJS.Timeout);
  };

  const togglePauseStatus = () => {
    setTrackerStatus(isPaused ? TrackerStatus.Playing : TrackerStatus.Paused);
  };

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

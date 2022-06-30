import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect, useMemo, useRef, useState } from 'react';
import { setDuration } from '@/redux/status/actions';
import { TrackerStatus } from '@/constants';
import { getTrackerStatus } from './constants';
import { selectNextExercise, selectPrevExercise, workoutsSelector } from '@/redux/workouts';

const useTrackingView = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { exercises, active, activeIndex } = useSelector(workoutsSelector);
  const [trackerStatus, setTrackerStatus] = useState<TrackerStatus>(TrackerStatus.Preparation);
  const [activeDuration, setActiveDuration] = useState(5);
  const [allTime, setAllTime] = useState(5);
  const interval = useRef<NodeJS.Timeout>();

  const statusToObj = useMemo(() => getTrackerStatus(trackerStatus), [trackerStatus]);

  const { isPlaying, isPaused, isPreparation } = statusToObj;

  const startTracking = () => {
    setAllTime(isPlaying ? active?.duration ?? 20 : 5);

    const finishTracking = () => {
      clearActiveInterval();
      if (isPreparation) {
        setTrackerStatus(TrackerStatus.Playing);
      } else {
        dispatch(setDuration(active?.duration ?? 0));
        if (activeIndex === exercises.length - 1) {
          history.push('/complete');
        }
        changeExercise(true)();
      }
    };

    setAllTime(isPlaying ? active?.duration ?? 20 : 5);

    const duration = isPreparation ? 5 : activeDuration ? activeDuration : active?.duration ?? 0;
    setActiveDuration(duration);

    interval.current = setInterval(() => {
      setActiveDuration((duration: number) => {
        if (duration - 1 <= 0) finishTracking();
        return duration - 1;
      });
    }, 1000);
  };

  const changeExercise = (next: boolean) => () => {
    clearActiveInterval();
    dispatch(setDuration(allTime - activeDuration));
    setTrackerStatus(TrackerStatus.Preparation);

    if (next) {
      dispatch(selectNextExercise());
      return;
    }

    dispatch(selectPrevExercise());
  };

  const onLeaveButtonClick = () => {
    dispatch(setDuration(allTime - activeDuration));
    history.push('/complete');
  };

  useEffect(() => {
    if (!exercises.length) return;

    if (statusToObj.isPaused) {
      clearActiveInterval();
    } else {
      startTracking();
    }
  }, [statusToObj, exercises.length]);

  const clearActiveInterval = () => {
    clearInterval(interval.current as NodeJS.Timeout);
  };

  const togglePauseStatus = () => {
    setTrackerStatus(isPaused ? TrackerStatus.Playing : TrackerStatus.Paused);
  };

  const percentage = (activeDuration * 100) / allTime;
  const activeColor = isPlaying ? 'rgba(255, 64, 129, 1)' : 'rgba(29, 233, 182, 1)';
  const title = isPlaying ? active?.title : 'Get Ready';

  return {
    activeIndex,
    isPlaying,
    isPaused,
    isPreparation,
    trackerStatus,
    title,
    exercises,
    active,
    percentage,
    activeDuration,
    activeColor,
    changeExercise,
    onLeaveButtonClick,
    togglePauseStatus,
  };
};

export default useTrackingView;

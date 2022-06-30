import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect, useMemo, useRef, useState } from 'react';
import { setDuration } from '@/redux/status/actions';
import { workoutsSelector } from '@/redux/workouts/selectors';
import { TrackerStatus } from '@/constants';
import { getTrackerStatus } from '@/views/TrackingView/constants';
import { selectNextExercise, selectPrevExercise } from '@/redux/workouts/actions';

const useTrackingView = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { exercises, active, activeIndex } = useSelector(workoutsSelector);
  const [trackerStatus, setTrackerStatus] = useState<TrackerStatus>(TrackerStatus.Preparation);
  const [activeDuration, setActiveDuration] = useState(5);
  const [allTime, setAllTime] = useState(5);
  const interval = useRef<any>(null);

  const { isPlaying, isPaused, isPreparation } = useMemo(
    () => getTrackerStatus(trackerStatus),
    [trackerStatus],
  );

  const startTracking = () => {
    const finishTracking = () => {
      clearInterval(interval.current);
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

    const setDurationFunc = (duration: number) => {
      if (duration - 1 <= 0) finishTracking();
      return duration - 1;
    };

    const duration = isPreparation ? 5 : activeDuration ? activeDuration : active?.duration ?? 0;
    setActiveDuration(duration);

    interval.current = setInterval(() => {
      setActiveDuration(setDurationFunc);
    }, 1000);
  };

  const changeExercise = (next: boolean) => () => {
    clearInterval(interval.current);
    dispatch(setDuration(allTime - activeDuration));
    if (next) {
      dispatch(selectNextExercise());
    } else {
      dispatch(selectPrevExercise());
    }
    setTrackerStatus(TrackerStatus.Preparation);
  };

  const onLeaveButtonClick = () => {
    dispatch(setDuration(allTime - activeDuration));
    history.push('/complete');
  };

  useEffect(() => {
    if (!exercises.length) return;

    if (isPaused) {
      clearInterval(interval.current);
    } else {
      setAllTime(isPlaying ? active?.duration ?? 20 : 5);
      startTracking();
    }
  }, [isPlaying, isPaused, active, exercises.length]);

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

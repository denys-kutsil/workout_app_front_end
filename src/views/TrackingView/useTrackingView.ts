import { useEffect, useMemo, useRef, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { useGetExerciseByIdQuery } from '@/apis/exercises';
import { ClientRoutes, theme, TrackerStatus } from '@/constants';
import { getTrackerStatus } from '@/helpers';
import { useActions } from '@/hooks';
import { statusActions } from '@/redux/status';
import { splitStrToArrayByTitle } from '@/utils';

const useTrackingView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const interval = useRef<NodeJS.Timeout | null>(null);
  const { setTotalDuration } = useActions(statusActions);
  const { data } = useGetExerciseByIdQuery(id as string, { skip: !id });

  const exercise = data?.exercise;

  const [trackerStatus, setTrackerStatus] = useState<TrackerStatus>(TrackerStatus.Preparation);
  const [activeDuration, setActiveDuration] = useState(5);
  const [allTime, setAllTime] = useState(5);

  const description = useMemo(
    () => splitStrToArrayByTitle(exercise?.description ?? ''),
    [exercise?.description],
  );

  const statusToObj = useMemo(() => getTrackerStatus(trackerStatus), [trackerStatus]);

  const { isPlaying, isPaused, isPreparation } = statusToObj;

  const percentage = (activeDuration * 100) / allTime;
  const activeColor = isPlaying ? theme.palette.warning.main : theme.palette.success.main;
  const title = isPlaying ? exercise?.title : 'Get Ready';
  const switchNextVisible = exercise?.nextExternalId;
  const switchPrevVisible = exercise?.prevExternalId;

  const finishTracking = () => {
    clearActiveInterval();
    if (isPreparation) {
      setTrackerStatus(TrackerStatus.Playing);
    } else {
      setTotalDuration(exercise?.duration ?? 0);
      if (!exercise?.nextExternalId) {
        navigate(ClientRoutes.Complete);
      }
      changeExercise(true)();
    }
  };

  const changeExercise = (next: boolean) => () => {
    clearActiveInterval();
    setTotalDuration(allTime - activeDuration);
    setTrackerStatus(TrackerStatus.Preparation);
    const id = next ? exercise?.nextExternalId : exercise?.prevExternalId;
    navigate(next && !id ? ClientRoutes.Complete : `${ClientRoutes.Tracking}/${id}`);
  };

  const onLeaveButtonClick = () => {
    setTotalDuration(allTime - activeDuration);
    navigate(ClientRoutes.Complete);
  };

  const updateDuration = (init = false) => {
    setActiveDuration((duration: number) => {
      if (init) {
        return isPreparation ? 5 : duration ? duration : exercise?.duration ?? 0;
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
    setAllTime(isPlaying ? exercise?.duration ?? 20 : 5);

    updateDuration(true);

    interval.current = setInterval(() => {
      updateDuration();
    }, 1000);
  };

  const clearActiveInterval = () => {
    clearInterval(interval.current as NodeJS.Timeout);
    interval.current = null;
  };

  const togglePauseStatus = () => {
    setTrackerStatus(isPaused ? TrackerStatus.Playing : TrackerStatus.Paused);
  };

  useEffect(() => {
    if (exercise) {
      startTracking();
    }
    return () => {
      clearActiveInterval();
    };
  }, [trackerStatus, exercise]);

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
    exercise,
    statusToObj,
    trackerStatus,
    changeExercise,
    onLeaveButtonClick,
    togglePauseStatus,
  };
};

export default useTrackingView;

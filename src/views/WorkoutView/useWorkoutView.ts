import { useMemo } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useGetExercisesDataQuery } from '@/apis/exercises';
import { ClientRoutes } from '@/constants';
import { statusSelector } from '@/redux/status';

const useWorkoutView = () => {
  const navigate = useNavigate();
  const { minutes, seconds } = useSelector(statusSelector);

  const { data } = useGetExercisesDataQuery();

  const categories = useMemo(() => Object.entries(data?.categories ?? []), [data]);
  const firstExternalId = data?.firstExternalId;

  const goBack = () => {
    navigate(-1);
  };

  const startWorkout = () => {
    navigate(ClientRoutes.Tracking + '/' + firstExternalId);
  };

  return {
    seconds,
    history,
    minutes,
    categories,
    goBack,
    startWorkout,
  };
};

export default useWorkoutView;

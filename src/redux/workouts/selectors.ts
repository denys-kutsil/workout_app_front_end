import { IRootState } from '@/redux/reducers';

export const workoutDataSelector = (state: IRootState) => state.workouts.data;

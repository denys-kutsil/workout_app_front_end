import { IRootState } from '@/redux/reducers';

export const workoutsSelector = (state: IRootState) => state.workouts;

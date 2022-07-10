import { IRootState } from '@/redux/store';

export const workoutsSelector = (state: IRootState) => state.workouts;

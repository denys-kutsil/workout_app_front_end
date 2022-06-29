import { IRootState } from '@/redux/reducers';

export const statusDurationSelector = (state: IRootState) => state.status.duration;

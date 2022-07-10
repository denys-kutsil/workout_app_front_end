import { IRootState } from '@/redux/store';

export const statusSelector = (state: IRootState) => state.status;

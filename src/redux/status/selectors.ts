import { IRootState } from '@/redux';

export const statusSelector = (state: IRootState) => state.status;

import type { IRootState } from '@/redux';

export const statusSelector = (state: IRootState) => state.status;

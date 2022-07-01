import { IRootState } from '@/redux/reducers';

export const statusSelector = (state: IRootState) => state.status;

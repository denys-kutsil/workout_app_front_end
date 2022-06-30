import { TrackerStatus } from '@/constants';

export const getTrackerStatus = (status: TrackerStatus) => ({
  isPlaying: status === TrackerStatus.Playing,
  isPaused: status === TrackerStatus.Paused,
  isPreparation: status === TrackerStatus.Preparation,
});

import { TrackerStatus } from '@/constants';

export const getTrackerStatus = (status: TrackerStatus) => ({
  isPlaying: status === TrackerStatus.Playing,
  isPaused: status === TrackerStatus.Paused,
  isPreparation: status === TrackerStatus.Preparation,
});

export const splitStrToArrayByTitle = (txt: string) => txt.split(/\d\. /).filter((i) => i.length);

export const videoConfig = {
  file: {
    attributes: {
      autoPlay: true,
      muted: true,
    },
  },
};

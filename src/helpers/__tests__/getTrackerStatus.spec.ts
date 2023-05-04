import { TrackerStatus } from '@/constants';
import { getTrackerStatus } from '@/helpers';

describe('getTrackerStatus', () => {
  it('should return the correct status object when given a playing status', () => {
    const status = TrackerStatus.Playing;
    const expected = {
      isPlaying: true,
      isPaused: false,
      isPreparation: false,
    };
    const result = getTrackerStatus(status);
    expect(result).toEqual(expected);
  });

  it('should return the correct status object when given a paused status', () => {
    const status = TrackerStatus.Paused;
    const expected = {
      isPlaying: false,
      isPaused: true,
      isPreparation: false,
    };
    const result = getTrackerStatus(status);
    expect(result).toEqual(expected);
  });

  it('should return the correct status object when given a preparation status', () => {
    const status = TrackerStatus.Preparation;
    const expected = {
      isPlaying: false,
      isPaused: false,
      isPreparation: true,
    };
    const result = getTrackerStatus(status);
    expect(result).toEqual(expected);
  });
});

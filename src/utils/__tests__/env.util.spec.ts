import { envUtil } from '@/utils';

const { mapEnv } = envUtil;

describe('mapEnv', () => {
  beforeEach(() => {
    process.env.REACT_APP_API_BACKEND = undefined;
  });

  it('returns the API endpoint when it is set in the environment', () => {
    process.env.REACT_APP_API_BACKEND = 'https://example.com/api';
    const env = mapEnv();
    expect(env.api).toBe('https://example.com/api');
  });

  it('returns a frozen object', () => {
    const env = mapEnv();
    expect(Object.isFrozen(env)).toBe(true);
  });
});

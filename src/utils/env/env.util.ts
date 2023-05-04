import type { IEnv } from './env.type';

export const mapEnv = () => {
  const parsed: IEnv = {
    api: process.env.REACT_APP_API_BACKEND || '',
  };

  return Object.freeze(parsed);
};

let env: IEnv;
export const getEnv = (): Readonly<IEnv> => {
  if (!env) {
    env = mapEnv();
  }
  return env;
};

import type { IEnv } from './env.type';

const mapEnv = () => {
  const parsed: IEnv = {
    api: process.env.REACT_APP_API || '',
    api_token: process.env.REACT_APP_API_TOKEN || '',
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

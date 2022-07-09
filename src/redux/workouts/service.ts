import axios, { AxiosResponse } from 'axios';

import { envUtil } from '@/utils';

const { api, api_token } = envUtil.getEnv();

const workoutService = (): Promise<AxiosResponse> =>
  axios.get(`${api}/api/quizzes/workouts`, { params: { api_token } });

export default workoutService;

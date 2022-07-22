import axios from 'axios';

import { envUtil } from '@/utils';

const { backend_url } = envUtil.getEnv();

const api = axios.create({
  withCredentials: true,
  baseURL: backend_url,
});

api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access-token')}`;
  }
  return config;
});

api.interceptors.response.use(
  (config) => config,
  async (error) => {
    const { config, response } = error;
    const originalRequest = error.config;
    if (response.status == 401 && config && !config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get(`${backend_url}/auth/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem('access-token', response.data.accessToken);
        return api.request(originalRequest);
      } catch (e) {
        console.log('Unauthorized');
      }
    }
    throw error;
  },
);

export default api;

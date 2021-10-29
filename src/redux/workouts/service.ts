import axios, { AxiosResponse } from "axios";

const token = '4bfcebd0-0216-4572-bdb7-939e9600b9b2';
const api = 'https://rnd.kilohealthservices.com';

const workoutService = (): Promise<AxiosResponse> => axios.get(`${api}/api/quizzes/workouts?api_token=${token}`);

export default workoutService;
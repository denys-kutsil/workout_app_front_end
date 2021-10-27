import axios from "axios";

export const getWorkoutDataService = (): any => {
	return axios.get('https://rnd.kilohealthservices.com/api/quizzes/workouts?api_token=4bfcebd0-0216-4572-bdb7-939e9600b9b2\n')
}
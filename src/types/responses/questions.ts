import { IExerciseResponse } from '@/types';

export interface IQuestionsResponse {
  title: string;
  exercises: IExerciseResponse[];
}

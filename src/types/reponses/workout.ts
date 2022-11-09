import { IQuestionsResponse } from '@/types';

export interface IWorkoutResponse {
  data: {
    questions: IQuestionsResponse[];
  };
}

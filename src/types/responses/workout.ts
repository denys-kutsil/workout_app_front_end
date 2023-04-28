import type { IQuestionsResponse } from '@/types';

export interface IWorkoutResponse {
  data: {
    title: string;
    questions: IQuestionsResponse[];
  };
}

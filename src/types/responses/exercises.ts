export interface IExerciseType {
  description: string;
  duration: number;
  externalId: number;
  photo: string;
  title: string;
  video: string;
  prevExternalId: string | null;
  nextExternalId: string | null;
}

export interface IGetExerciseByIdResponse {
  exercise: IExerciseType;
}

export interface IGetAllExercisesResponse {
  firstExternalId: string;
  categories: { [key: string]: IExerciseType[] };
}

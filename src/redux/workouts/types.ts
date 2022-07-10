export interface IWorkoutsStateType {
  data: WorkoutDataType[];
  exercises: ExerciseType[];
  active: ExerciseType | null;
  activeIndex: number;
}

export interface ExerciseType {
  description: string;
  duration: number;
  id: number;
  photo: string;
  title: string;
  video: string;
}

export interface MuscleGroupType {
  name: string;
  photo: string;
}

export interface WorkoutDataType {
  title?: string;
  exercises: ExerciseType[];
  muscle_group: MuscleGroupType;
}

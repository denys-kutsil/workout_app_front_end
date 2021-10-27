export interface ExerciseType {
	description: string
	duration: number
	id: number
	photo: string
	title: string
	video: string
}

export interface WorkoutDataType {
	title?: string,
	exercises: ExerciseType[]
}
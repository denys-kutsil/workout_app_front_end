import actions from "./actions";

export interface StatusStateType {
	duration: number
}


const reducers = (state: StatusStateType = { duration: 0 }, action: any) => {
	switch (action.type) {
		case actions.SET_DURATION:
			return {
				...state, duration: state.duration + action.duration
			}
		default:
			return state;
	}
};

export default reducers;
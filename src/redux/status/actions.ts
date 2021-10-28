const actions = {
	SET_DURATION: 'status/SET_DURATION',
};

export const setDuration = (duration: number) => {
	return {
		type: actions.SET_DURATION,
		duration
	}
};

export default actions;
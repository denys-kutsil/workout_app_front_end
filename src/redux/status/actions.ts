const actions = {
  SET_DURATION: 'status/SET_DURATION',
};

export const setTotalDuration = (duration: number) => {
  return {
    type: actions.SET_DURATION,
    duration,
  };
};

export default actions;

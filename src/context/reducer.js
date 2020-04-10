const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "CHANGE_GL":
      return {
        ...state,
        gl: payload
      };
    case "CHANGE_LOCALE":
      return {
        ...state,
        locale: payload
      };
    case "CHANGE_LAYERS":
      return {
        ...state,
        layers: { ...state.layers, ...payload }
      };
    default:
      return state;
  }
};

export default reducer;

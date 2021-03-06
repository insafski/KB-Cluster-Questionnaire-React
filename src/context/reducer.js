const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "CHANGE_TERRITORY":
      return {
        ...state,
        territory: payload
      };
    case "CHANGE_THEME":
      return {
        ...state,
        customTheme: payload
      };
    case "CHANGE_LOADING_STATE":
      return {
        ...state,
        loading: payload
      };
    default:
      return state;
  }
};

export default reducer;

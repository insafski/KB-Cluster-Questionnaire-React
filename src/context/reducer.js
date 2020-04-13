const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "CHANGE_TERRITORY":
      return {
        ...state,
        territory: payload
      };
    default:
      return state;
  }
};

export default reducer;

import React, { createContext, useReducer } from "react";

import reducer from "./reducer";
import initialState from "./initial-state";

const StateContext = createContext(initialState);

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
export { StateContext };

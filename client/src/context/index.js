import React, { createContext, useReducer } from "react";

const initialState = {
  user: null,
};

// Create Context
export const Context = createContext();

// Root Reducer
const rootReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

// Context Provider
export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

import React, { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

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
  const router = useRouter();
  useEffect(
    () => {
      const user = JSON.parse(window.localStorage.getItem("user"));
      if (user) {
        dispatch({
          type: "LOGIN",
          payload: user,
        });
      }

      axios.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data

        return response;
      });
    },
    function (response) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      // if (res.status === 401 && res.config && !res.config.__isRetryRequest) {
      //   return new Promise((resolve, reject) => {
      //     axios.getResponse

      if (response.status === 401) {
        dispatch({
          type: "LOGOUT",
        });
        router.push("/login");
      }
    }
  );

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

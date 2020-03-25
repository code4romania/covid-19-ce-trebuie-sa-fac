import { useReducer, useEffect } from "react";
import { useLocalStorage } from "@rehooks/local-storage";

export function useSetState(initialState) {
  return useReducer((prevState, state) => {
    return { ...prevState, ...state };
  }, initialState);
}

export { useEffect, useLocalStorage };

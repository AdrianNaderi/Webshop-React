import { useCallback, useReducer } from "react";

const httpReducer = (state, action) => {
  if (action.type === "SEND") {
    return {
      data: null,
      error: null,
      loading: true,
    };
  }

  if (action.type === "SUCCESS") {
    return {
      data: action.payload,
      error: null,
      loading: false,
    };
  }

  if (action.type === "ERROR") {
    return {
      data: null,
      error: action.payload,
      loading: false,
    };
  }
  return state;
};

const useHttp = (requestFunction, initLoading = false) => {
  const [httpState, dispatch] = useReducer(httpReducer, { data: null, error: null, loading: initLoading });

  const sendReq = useCallback(async (requestData) => {
    dispatch({ type: "SEND" });
    try {
      const data = await requestFunction(requestData);
      dispatch({ type: "SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.message || "We accounted a problem. We are sorry about that!" });
    }
  }, []);

  return {
    ...httpState,
    sendReq,
  };
};

export default useHttp;

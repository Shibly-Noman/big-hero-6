import {
    PROMPT_API_CALL,
    PROMPT_REDUCER
  } from "../../constants/prompt-constants";
  
  export const initialState = {
    errorMessage: "",
    promptData: [], // can be stream or string also
    promptLoading: false
  };
  
  export default function promptReducer(state = initialState, action: any) {
    switch (action.type) {
      case PROMPT_API_CALL.GET_REQUEST:
        return {
          ...state,
        };
      case PROMPT_API_CALL.GET_SUCCESS:
        return {
          ...state,
          errorMessage: "",
          promptData: action?.result ? action.result : [],
        };
      case PROMPT_API_CALL.GET_FAILURE:
        return {
          ...state,
          errorMessage: action.error,
        };
      case PROMPT_REDUCER.CLEAR_REDUCER:
          return {
            ...initialState
          }; 
      default:
        return state;
    }
  }
  
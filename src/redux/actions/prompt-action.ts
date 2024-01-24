import { PROMPT_API_CALL, PROMPT_REDUCER } from "../constants/prompt-constants";

// export function getActivePublishers() {
//   return {
//     type: PUBLISHER_LIST_API_CALL.GET_REQUEST,
//   };
// }

export function getPromptData() {
  return {
    type: PROMPT_API_CALL.GET_REQUEST,
    // params for post
  };
}

export function clearReducer() {
  return {
    type: PROMPT_REDUCER.CLEAR_REDUCER
  }
}

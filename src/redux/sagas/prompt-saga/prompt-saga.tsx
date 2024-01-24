import { AxiosServices } from "../../../network/AxiosServices";
import { ApiServices } from "../../../network/ApiServices";
import { takeLatest, put, call } from "redux-saga/effects";
import { PROMPT_API_CALL, PROMPT_REDUCER } from "../../constants/prompt-constants";
import { getServerErrorMessage } from "../../../components/ResponseMessages/ResponseMessages";

function* getPromptData(actions: { type: string, params: any }): any {
  try {
    const response = yield call(
      AxiosServices.post, 
      ApiServices.PROMPT.PROMPT_DATA,
      actions.params
    );   
    const data = response.data || {};
    yield put({ type: PROMPT_API_CALL.GET_SUCCESS, result: data });
  } catch (err: any) {
    if (err) {
      yield put({
        type: PROMPT_API_CALL.GET_FAILURE,
        error: getServerErrorMessage(err),
      });
    }
  }
}
export default function* promptSaga() {
  yield takeLatest(PROMPT_API_CALL.GET_REQUEST, getPromptData);
}

import { all } from 'redux-saga/effects';
import promptSaga from './prompt-saga/prompt-saga'

function* rootSaga() {

    yield all([
        promptSaga(),
    ])
}

export default rootSaga
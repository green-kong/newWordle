import { takeLatest, call, put } from 'redux-saga/effects';

import userActions from '../reducer/user/userActions';
import { loginAPI, verifyAPI, joinAPI } from '../api/user/login';

function* login({ type, payload }) {
  const result = yield call(loginAPI, payload);
  if (result.token) {
    const { user } = yield call(verifyAPI, result);
    yield put(userActions.loginSuccess(user));
  }
}

function* join({ type, payload }) {
  const { passwordCheck, ...body } = payload;
  const result = yield call(joinAPI, body);
  if (result.result) {
    yield put(userActions.joinSuccess(result.user));
  } else {
    console.log(result);
    yield put(userActions.joinFailure(result.msg));
  }
}

export default function* user() {
  yield takeLatest(userActions.LOGIN_REQUEST, login);
  yield takeLatest(userActions.JOIN_REQUEST, join);
}

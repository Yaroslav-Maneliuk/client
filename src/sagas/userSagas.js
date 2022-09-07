import { put } from "redux-saga/effects";
import * as API from "../api";
import * as ActionUserCreators from "../actions/userCreators";

export function* createUserSaga(action) {
  try {
    const {
      data: { data: user },
    } = yield API.createUser(action.payload.values);
    yield put(ActionUserCreators.createUserSuccess({ user }));
  } catch (error) {
    yield put(ActionUserCreators.createUserError({ error }));
  }
}



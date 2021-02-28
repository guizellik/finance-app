import { all, takeLatest } from 'redux-saga/effects'
import { UserActionTypes } from './user/types'
import { loginUserSaga, registerUserSaga } from './user/sagas'

export default function* rootSaga(): any {
  return yield all([
    takeLatest(UserActionTypes.USER_REGISTER_REQUEST, registerUserSaga),
    takeLatest(UserActionTypes.USER_LOGIN_REQUEST, loginUserSaga),
  ])
}
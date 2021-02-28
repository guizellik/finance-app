import { call, put } from 'redux-saga/effects'
import toast from 'react-hot-toast'

import { RegisterUserRequestAction } from './types'
import { registerUserSuccess, registerUserFailure, loginUserSuccess, loginUserFailure } from './actions'
import UserServices from '../../../services/auth-service'
import applicationHistory from '../../../history'

export function* registerUserSaga(action: RegisterUserRequestAction) {
  const { payload: { email, password }} = action
  try {
    yield call(UserServices.registerUser, email, password)
    yield put(registerUserSuccess())
    yield call(applicationHistory.push, '/login')
    toast.success('Usuário cadastrado com sucesso!')
  } catch (err) {
    yield put(registerUserFailure(err))
    toast.error(`Erro ao cadastrar usuário: ${err}`)
  }
}

export function* loginUserSaga(action: RegisterUserRequestAction): any {
  const { payload: { email, password }} = action
  try {
    const response = yield call(UserServices.loginUser, email, password)
    if(response.data.accessToken){
      localStorage.setItem('token', response.data.accessToken);
      yield put(loginUserSuccess(response.data.accessToken))
      yield call(applicationHistory.push, './home')
    }
  } catch (err) {
    yield put(loginUserFailure(err))
    toast.error(`Erro ao logar: ${err}`)
  }
}
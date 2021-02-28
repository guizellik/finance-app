import { Reducer } from 'redux'

import { UserReducerInitialState, UserActionTypes } from './types'

const initialState: UserReducerInitialState = {
  email: '',
  token: '',
  error: ''
}

const userReducer: Reducer<UserReducerInitialState> = (state = initialState, action: any) => {
  switch (action.type) {
    case UserActionTypes.USER_REGISTER_FAILURE:
      return {...state, error: action.payload.error}
    case UserActionTypes.USER_LOGIN_SUCCESS:
      return {...state, token: action.payload.token}
    case UserActionTypes.USER_LOGIN_FAILURE:
      return {...state, error: action.payload.error}
    default:
      return state
  }
}

export default userReducer

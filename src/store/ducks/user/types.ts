// Action types
export enum UserActionTypes {
  USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST',
  USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS',
  USER_REGISTER_FAILURE = 'USER_REGISTER_FAILURE',
  USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST',
  USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',
  USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE'
}

// Data types
export interface User {
  email: string,
  token?: string
}

// Initial State types
export interface UserReducerInitialState {
  email?: string,
  token: string,
  error: string
}

// Action State types
export interface RegisterUserRequestAction {
  type: UserActionTypes,
  payload: {
    email: string,
    password: string
  }
}
export interface RegisterUserSuccessAction {
  type: UserActionTypes,
}

export interface RegisterUserFailureAction {
  type: UserActionTypes,
  payload: {
    error: string
  }
}

export interface LoginUserRequestAction {
  type: UserActionTypes,
  payload: {
    email: string,
    password: string
  }
}
export interface LoginUserSuccessAction {
  type: UserActionTypes,
}

export interface LoginUserFailureAction {
  type: UserActionTypes,
  payload: {
    error: string
  }
}

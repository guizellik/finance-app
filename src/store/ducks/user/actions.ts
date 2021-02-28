import { UserActionTypes } from './types'

export const registerUserRequest = (userEmail: string, userPassword: string) => ({type: UserActionTypes.USER_REGISTER_REQUEST, payload: {email: userEmail, password: userPassword}})
export const registerUserSuccess = () => ({type: UserActionTypes.USER_REGISTER_SUCCESS})
export const registerUserFailure = (error: string) => ({type: UserActionTypes.USER_REGISTER_FAILURE, payload: {error}})

export const loginUserRequest = (userEmail: string, userPassword: string) => ({type: UserActionTypes.USER_LOGIN_REQUEST, payload: {email: userEmail, password: userPassword}})
export const loginUserSuccess = (token: string) => ({type: UserActionTypes.USER_LOGIN_SUCCESS, payload:{token}})
export const loginUserFailure = (error: string) => ({type: UserActionTypes.USER_LOGIN_FAILURE, payload: {error}})
import rootSaga from './ducks/rootSaga'
import createSagaMiddleware from 'redux-saga'
import { createStore, Store, applyMiddleware, combineReducers } from 'redux'
import userReducer from './ducks/user'
// import currencyReducer from './ducks/currency'
// import toastReducer from './ducks/toast'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

const createRootReducer = () => combineReducers({
  user: userReducer,
  // currency: currencyReducer,
  // toast: toastReducer
})

export const store: Store = createStore(
  createRootReducer(),
  applyMiddleware(...middlewares)
)
sagaMiddleware.run(rootSaga)

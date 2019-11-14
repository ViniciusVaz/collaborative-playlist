import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import isClient from './isClient'
import { loadState } from './storage'
import rootReducer from '../ducks/index'

export default () => {
  const localStorageState = isClient() ? loadState() : {},
    serverState = {} || {}

  const currentState = Object.assign({}, localStorageState, serverState)

  const store = createStore(
    rootReducer,
    currentState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )

  store.subscribe(() => {
    const state = store.getState(),
      { requests, lead } = state,
      appAuth =
        requests.appAuth && !requests.appAuth.isLoading
          ? requests.appAuth
          : null

    // persistAppAuth(appAuth)
  })

  return store
}
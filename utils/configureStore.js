import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import isClient from './isClient'
import { loadState, addToState } from './storage'
import rootReducer from '../ducks/index'

const persistToken = tokens => {
	addToState({
		tokens,
	})
}

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
      { requests, tokens } = state,
      appAuth =
        requests.appAuth && !requests.appAuth.isLoading
          ? requests.appAuth
          : null

    persistToken(tokens)
  })

  return store
}
import { handleActions } from 'redux-actions'

const initialState = {}

export const addToken = payload => {
  return {
    type: 'ADD_TOKEN',
    payload,
  }
}

export const tokensReducer = handleActions({
  ADD_TOKEN: (state, { payload }) => {
    return {
      ...state,
      ...payload,
    }
  }
}, initialState)

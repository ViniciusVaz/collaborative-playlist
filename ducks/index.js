import { combineReducers } from 'redux'
import { requestsReducer } from './requests'
import { tokensReducer } from './tokens'

const rootReducer = combineReducers({
  requests: requestsReducer,
  tokens: tokensReducer
})

export default rootReducer
import { combineReducers } from 'redux'
import { requestsReducer } from './requests'

const rootReducer = combineReducers({
  requests: requestsReducer
})

export default rootReducer
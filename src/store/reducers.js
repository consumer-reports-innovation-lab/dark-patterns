import { combineReducers } from 'redux'
import asyncReducer from '../common/async/asyncReducer'

const rootReducer = () => combineReducers({
  async: asyncReducer,
})

export default rootReducer

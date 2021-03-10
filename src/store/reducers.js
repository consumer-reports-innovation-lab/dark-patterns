import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import locationReducer from './location'

import asyncReducer from '../common/async/asyncReducer'
import modalReducer from '../common/modal/modalReducer'

const rootReducer = () => combineReducers({
  toastr: toastrReducer,
  location: locationReducer,
  async: asyncReducer,
  modals: modalReducer,
})

export default rootReducer
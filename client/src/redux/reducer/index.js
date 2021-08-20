import { combineReducers } from 'redux';
import authReducer from './auth';

const allReducers = combineReducers({
  auth: authReducer,
});

export default allReducers;

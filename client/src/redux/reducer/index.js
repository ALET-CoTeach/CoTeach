import authReducer from './auth';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    auth: authReducer
});

export default allReducers;
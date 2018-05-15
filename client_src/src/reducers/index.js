import { combineReducers } from 'redux';
import authReducer from './authReducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;

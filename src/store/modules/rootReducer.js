/**
 * unir todos os reducers
 * */
import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';

export default combineReducers({ auth, user });

import { AUTH_USER,
         UNAUTH_USER,
         AUTH_ERROR,
       } from '../actions/types';
import { status } from '../util/status';

const INITIAL_STATE = {
  error: null,
  token: null,
  fetching_user: false,
  user: null,
  fetch_user_error: null,
}

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case AUTH_USER:
      return { ...state, token: action.payload , register_error: null, error: null};
    case UNAUTH_USER:
      return { ...state, token: null, user: null };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

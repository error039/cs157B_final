import axios from 'axios';
import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER,
  REGISTER_STATUS
} from './types';
import { status } from '../util/status';
import history from '../history';

var qs = require('qs');

const BASE_URL = 'http://localhost:3001/api';

export function signUp({
  email,
  password,
}) {
  const url = `${BASE_URL}/Users`;
  console.log(password);
  console.log(email);
  return dispatch => {
    dispatch({
      type: REGISTER_STATUS,
      payload: status.FETCHING,
    });
    axios.post(url, qs.stringify({
      email: email,
      password: password,
    }))
    .then(response => {
      console.log(response);
    });
  }
}

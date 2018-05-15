import axios from 'axios';
import {
  AUTH_USER,
  USER_STATUS,
  AUTH_ERROR,
  UNAUTH_USER,
  REGISTER_STATUS,
  REGISTER_ERROR,
} from './types';
import { status } from '../util/status';
import history from '../history';

var qs = require('qs');

const BASE_URL = 'http://localhost:3000/api';

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
      dispatch({
      type: REGISTER_STATUS,
      payload: status.SUCCESSFUL,
    });
    history.push('/');
    }, error => {
        if (error) {
          errorHandler(dispatch, error.response, REGISTER_ERROR);
        }
        dispatch({
          type: REGISTER_STATUS,
          payload: status.FAILURE,
        });
    });
  }
}

export function logout() {
  return dispatch => {
    dispatch({
      type: UNAUTH_USER,
      payload: null
    });
  }
}

export function login({
  email,
  password,
}) {
  const url = `${BASE_URL}/Users/login`;
  console.log(password);
  console.log(email);
  return dispatch => {
    axios.post(url, qs.stringify({ email: email, password: password }))
      .then(response => {
        console.log(response);
        dispatch({
          type: AUTH_USER,
          payload: response.data.id
        });
        history.push('/Dashboard');
      }, error => {
          if (error) {
            errorHandler(dispatch, error.response, AUTH_ERROR);
          }
      });
  };
}

export function setToken(token) {
  const url = `${BASE_URL}/checkToken?token=${token}`;
  // check token is expired
  return dispatch => {
    axios.get(url)
      .then(response => {
        //console.log('reponse.data = ' + response.data);
        console.log('inside set token');
        console.log(response.data.data);
        dispatch({
          type: AUTH_USER,
          payload: token
        });
      }, error => {
          console.log('token not valid');
          if (error) {
            errorHandler(dispatch, error.response, AUTH_ERROR);
          }
      });
  };
}

export function errorHandler(dispatch, error, type) {
  var errorMessage = "Error!";
  if(error && error.data && error.data.error && error.data.error.message) {
    errorMessage = error.data.error.message;
  } else if (error){
    errorMessage = error;
  }
  console.log(errorMessage);
  dispatch({
    type: type,
    payload: errorMessage
  });
}

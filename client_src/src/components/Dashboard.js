import React, { Component } from 'react';
import Login from './Login';
import history from '../history';
import { withCookies } from 'react-cookie';
import { withRouter } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { logout, setToken } from '../actions/index';

import { store } from '../index';
import '../styles/index.css';

class Dashboard extends Component {

  normalStyle = {
    backgroundColor: "#FAFAFA",
  }

  componentWillMount() {
    const { cookies, token } = this.props;
    var shouldFetch = true;
    var newToken = null;

    if (cookies.get('token')) {
      // this happens when the website refresh
      if (!token) {
        console.log("setting token");
        newToken = cookies.get('token');
        store.dispatch(setToken(newToken));
      }
    } else if (token) {
      // it happens when first time login, or switch account
      console.log('no cookie found but token is set!!! it happened!');
      cookies.set('token', token, { path:'/' });
      newToken = token;
    } else {
      // not authorized
      history.push('/');
      shouldFetch = false;
    }
    if (shouldFetch) {
    }
  }

  handleLogout() {
    console.log('hanldeLogout()');
    const { cookies } = this.props;
    store.dispatch(logout());
    cookies.remove('token');
    history.push('/');
  }

  render() {
    return (
      <div>
        inside dashboard
        <a onClick={this.handleLogout}
          href=""
          className="btn">
          Log out
        </a>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth_error: state.auth.error,
    token: state.auth.token,
    user: state.auth.user,
    isFectchingUser: state.auth.fetching_user,
  };
}

export default withCookies(
    withRouter(
      connect(
        mapStateToProps,
        { logout, setToken }
      )(Dashboard)
    )
);

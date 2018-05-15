import React, { Component } from 'react';
import Login from './Login';
import history from '../history';
import { withCookies } from 'react-cookie';
import { withRouter } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import '../styles/index.css';

class HomeLayout extends Component {

  normalStyle = {
    backgroundColor: "#FAFAFA",
  }

  componentWillMount() {
    const { cookies } = this.props;
    if (cookies.get('token')) {
      console.log("cookie has token");
      history.push('/Dashboard');
    }
  }

  render() {
    return (
      <div className="page">
        <Login/>
      </div>
    );
  }
}

export default withCookies(withRouter(HomeLayout));

import React, { Component } from 'react';
import { login } from '../actions/index';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Container, Input, Form, Message } from 'semantic-ui-react';
import { store } from '../index';

import '../styles/index.css';

class Login extends Component {
  handleFormSubmit(formProps) {
    this.props.login(formProps);
  }

  componentWillUnmount() {
    console.log('login page will unmoount');
    //store.dispatch(clearForms());
  }

  EmailField = ({input: { onChange }}) =>
    <Form.Field
        placeholder="Email"
        control={Input}
        type="text"
        onChange={onChange}
        required
    />

  PasswordField = ({input: { onChange }}) =>
    <Form.Field
        placeholder="Password"
        control={Input}
        type="password"
        onChange={onChange}
        required
    />

  render() {
    const { handleSubmit, submitting, errorMessage } = this.props;
    return (
      <div>
        <h2 className="card-title cardTitle px-2 pt-3">
          Login
        </h2>
        <Form
          className="justify-content-center position-relative"
          onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field
            name="email"
            component={this.EmailField}
          />
          <Field
            name="password"
            component={this.PasswordField}
          />
          <button
            className="form-control btn btn-primary mb-2"
            type="submit"
            disabled={submitting}>
            Login
          </button>
          <a
            className="btn btn-secondary form-control"
            style={{width: "100%"}}
            href="/register"
            role="button">
            register
          </a>
      </Form>
      <Message negative hidden={errorMessage === null}>
        {errorMessage}
      </Message>
    </div>
    );
  }
}

Login = reduxForm({
  form: 'login'
})(Login);

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
  };
}

export default connect(mapStateToProps, { login })(Login);

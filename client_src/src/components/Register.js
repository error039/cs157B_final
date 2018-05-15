import React, { Component } from 'react';
import { signUp } from '../actions/index';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Container, Input, Form, Message } from 'semantic-ui-react';
import { store } from '../index';

import '../styles/index.css';

class Register extends Component {
  handleFormSubmit(formProps) {
    this.props.signUp(formProps);
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
          Register
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
            className="form-control btn BlueButton mb-2"
            type="submit"
            disabled={submitting}>
            Register
          </button>
          <a
            className="btn btn-secondary form-control"
            style={{width: "100%"}}
            href="/"
            role="button">
            back
          </a>
      </Form>
      <Message negative hidden={errorMessage === null}>
        {errorMessage}
      </Message>
    </div>
    );
  }
}

Register = reduxForm({
  form: 'register'
})(Register);

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
  };
}

export default connect(mapStateToProps, { signUp })(Register);

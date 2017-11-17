import React, { Component } from 'react';

//import Form from 'react-router-form';
// For when "Form" starts working as expected:
// <Form to={'/login'} method="GET" ...

export default class SignUpComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBody: true,
      hasValidationErrors: false
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const $form = event.target;

    const name = $form.name.value;
    const email = $form.email.value;
    const password = $form.password.value;
    const newUser = { name, email, password };

    let regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.match(regEmail) && password.length >= 8) {
      this.props.onSignUp(newUser);
      this.props.history.push('/login');
    } else this.setState({ hasValidationErrors: true });
  };

  render() {
    return (
      <form id="form" className="col s12 m12" onSubmit={this.handleSubmit}>
        <div id="title" className="col s12 m12">
          <h4 className="green-text">Sign Up</h4>
        </div>

        <div className="row">
          <div className="input-field col s12 m12">
            <i className="material-icons prefix green-text">person</i>
            <input
              id="name"
              type="text"
              className="validate"
              placeholder="Full Name"
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12 m12">
            <i className="material-icons prefix green-text">email</i>
            <input
              id="email"
              type="text"
              className="validate"
              placeholder="Email Address"
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12 m12">
            <i className="material-icons prefix green-text">lock</i>
            <input
              id="password"
              type="password"
              className="validate"
              placeholder="Create a Password"
              required
            />
          </div>
        </div>

        <div className="row center">
          <button
            id="submit-button"
            type="submit"
            name="action"
            className="btn-large waves-effect waves-light green lighten-1">
            SIGN UP
          </button>
          {this.state.hasValidationErrors &&
            <h5 style={styles.errorStyle}>Please submit valid inputs</h5>}
        </div>
      </form>
    );
  }
}

const styles = {
  errorStyle: {
    color: 'red',
    fontWeight: 'bold'
  }
};

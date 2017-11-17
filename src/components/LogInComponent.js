import React, { Component } from 'react';

export default class LogInComponent extends Component {
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

    const email = $form.email.value;
    const password = $form.password.value;
    const userInfo = { email, password };

    let regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.match(regEmail) && password.length >= 8) {
      this.props.onLogIn(userInfo);
    } else this.setState({ hasValidationErrors: true });
  };

  render() {
    //let errorMessage = localStorage.getItem('errorMsg');
    return (
      <form id="form" className="col s12 m12" onSubmit={this.handleSubmit}>
        <div id="title" className="col s12 m12">
          <h4 className="green-text">Log In</h4>
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
              placeholder="Password"
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
            LOG IN
          </button>
          {this.state.hasValidationErrors &&
            <h5 style={styles.errorStyle}>Please submit valid inputs</h5>}
          {
            <h5 style={styles.errorStyle}>
              {this.props.errorMsg ? this.props.errorMsg : null}
            </h5>
          }
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

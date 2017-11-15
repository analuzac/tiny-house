import React, { Component } from 'react';

export default class LogInComponent extends Component {
  //{ userInfo, onLogIn, history }) {
  //console.log('LOGIN_PROPS', props);
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
    const userInfo = {};
    userInfo.email = $form.email.value;
    userInfo.password = $form.password.value;
    console.log('USER LOGGED IN', userInfo);

    let regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (userInfo.email.match(regEmail) && userInfo.password.length >= 8) {
      this.props.onLogIn(userInfo);
    } else this.setState({ hasValidationErrors: true });
  };

  render() {
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

import React, { Component } from 'react';

export default class FilterComponent extends Component {
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
    const filter = $form.filter.value.trim();
    this.props.onFilter(filter);
  };

  render() {
    return (
      <form id="form" className="col s12 m12" onSubmit={this.handleSubmit}>
        <div className="row">
          {/* <div className="input-field col s12 m5"> */}
          <i className="material-icons prefix green-text">filter_list</i>
          <input
            id="filter"
            type="text"
            className="validate"
            placeholder="Filter by (e.g. Berkeley, CA)"
            required
          />
          {/* </div> */}
          <div className="row center">
            <button
              id="submit-button"
              type="submit"
              name="action"
              className="btn-large waves-effect waves-light green lighten-1">
              FILTER
            </button>
            {this.state.hasValidationErrors &&
              <p style={styles.errorStyle}>Please submit valid inputs</p>}
          </div>
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

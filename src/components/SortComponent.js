import React, { Component } from 'react';

export default class SortComponent extends Component {
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

    const sort = $form.sort.value.trim();
    console.log('sort', sort);

    this.props.onSort(sort);
  };

  render() {
    //console.log(this.state, 'these are the props');
    return (
      <form id="form" className="col s12 m12" onSubmit={this.handleSubmit}>
        <div className="row">
          {/* <div className="input-field col s12 m5"> */}
          <i className="material-icons prefix green-text">sort</i>
          <input
            id="sort"
            type="text"
            className="validate"
            placeholder="Sort by (e.g. rent)"
            required
          />
          {/* </div> */}
          <div className="row center">
            <button
              id="submit-button"
              type="submit"
              name="action"
              className="btn-large waves-effect waves-light green lighten-1">
              SORT
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

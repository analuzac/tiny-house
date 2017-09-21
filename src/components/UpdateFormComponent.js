import React, { Component } from 'react';

export default class UpdateFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBody: true,
      hasValidationErrors: false,
      hostInfo: {
        rent: 500,
        dimensions: 300,
        coordinates: 'Berkeley, CA',
        date: 'September 23, 2017',
        amenities: 'washer/dryer, water hose, compost/recycling/trash bins'
        //   imagePath: '//via.placeholder.com/300x200'
      }
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    const $form = event.target;

    const coordinates = $form.coordinates.value
      ? $form.coordinates.value.trim()
      : this.state.hostInfo.coordinates;

    const dimensions = $form.dimensions.value
      ? $form.dimensions.value.trim()
      : this.state.hostInfo.dimensions;

    const rent = $form.rent.value
      ? $form.rent.value.trim()
      : this.state.hostInfo.rent;

    const date = $form.date.value
      ? $form.date.value.trim()
      : this.state.hostInfo.date;

    const amenities = $form.amenities.value
      ? $form.amenities.value.trim()
      : this.state.hostInfo.amenities;

    const updatedHostInfo = { coordinates, dimensions, rent, date, amenities };
    // this.props.onSubmit(hostInfo);
    //this.props.updateListing(updatedHostInfo);
    console.log(updatedHostInfo);

    //let regPhone = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
    // let regPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    //
    // if (phone.match(regPhone) || name !== null || address !== null) {
    //   this.props.onSubmit({ name, phone, address });
    // } else {
    //   this.setState({ hasValidationErrors: true });
    // }
  };

  render() {
    console.log(this.state, 'these are the props');
    console.log('this is hostInfo', this.state.hostInfo);
    return (
      <form id="form" className="col s12 m12" onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="input-field col s12 m12">
            <i className="material-icons prefix green-text">home</i>
            <input
              id="coordinates"
              type="text"
              className="validate"
              // placeholder="Host coordinates"
              placeholder={this.state.hostInfo.coordinates}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12 m12">
            <i className="material-icons prefix green-text">crop_landscape</i>
            <input
              id="dimensions"
              type="tel"
              className="validate"
              // placeholder="Backyard dimensions"
              placeholder={this.state.hostInfo.dimensions}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12 m12">
            <i className="material-icons prefix green-text">attach_money</i>
            <input
              id="rent"
              type="text"
              className="validate"
              // placeholder="Desired rent"
              placeholder={this.state.hostInfo.rent}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12 m12">
            <i className="material-icons prefix green-text">date_range</i>
            <input
              id="date"
              type="text"
              className="validate"
              // placeholder="Projected earliest move-in date"
              placeholder={this.state.hostInfo.date}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12 m12">
            <i className="material-icons prefix green-text">
              format_list_numbered
            </i>
            <input
              id="amenities"
              type="text"
              className="validate"
              //placeholder="Available amenities"
              placeholder={this.state.hostInfo.amenities}
              //value="WATER"
            />
          </div>
        </div>

        <div className="row center">
          <button
            id="submit-button"
            type="submit"
            name="action"
            className="btn-large waves-effect waves-light green lighten-1">
            SUBMIT LISTING
          </button>
          {this.state.hasValidationErrors &&
            <p style={styles.errorStyle}>Please submit valid inputs</p>}
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

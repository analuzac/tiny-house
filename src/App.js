import React, { Component } from 'react';

//Thunks
import createListingProcess from './redux/thunks/createListingProcess';
import deleteListingProcess from './redux/thunks/deleteListingProcess';
import getOneListingProcess from './redux/thunks/getOneListingProcess';
import getListingsProcess from './redux/thunks/getListingsProcess';

//Page components
import RegisterBackyardPage from './components/RegisterBackyardPage';
import ViewListingsPage from './components/ViewListingsPage';
import DetailedListingPage from './components/DetailedListingPage';

// //API utilities
// import getListings from './api/getListings';
// import getOneListing from './api/getOneListing';
// import createListing from './api/createListing';
// import deleteListing from './api/deleteListing';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listingItems: [],
      hostInfo: null
    };

    this.props.store.subscribe(() => {
      this.setState(this.props.store.getState());
    });
  }

  render() {
    return (
      <RegisterBackyardPage
        hostInfo={this.state.hostInfo}
        onSubmit={this._submitForm}
        addListing={this._addListing}
        onClose={this._closeSuccessMessage}
        onEdit={this._onEdit}
        onDelete={this._onDelete}
      />
      // <ViewListingsPage
      //   listingItems={this.state.listingItems}
      //   onLove={this._onLove}
      // />
      // <DetailedListingPage hostInfo={this.state.hostInfo} />
    );
  }

  //In RegisterBackyardPage.js & ViewListingsPage.js
  componentDidMount() {
    this.props.store.dispatch(getListingsProcess());
  }

  // //In RegisterBackyardPage.js to send to API
  _addListing = hostInfo => {
    //console.log(hostInfo);
    let composedListing = {
      fields: {
        coordinates: hostInfo.coordinates,
        dimensions: Number(hostInfo.dimensions),
        rent: Number(hostInfo.rent),
        date: hostInfo.date,
        amenities: hostInfo.amenities
      }
    };
    console.log(composedListing);

    this.props.store.dispatch(createListingProcess(composedListing));
  };

  //In RegisterBackyardPage.js for closeSucessMessage
  _submitForm = hostInfo => {
    console.log('inside submitForm', hostInfo);
  };

  //In RegisterBackyardPage.js
  _closeSuccessMessage = () => {
    this.props.store.dispatch({
      type: 'CLOSE_SUCESS_MESSAGE',
      hostInfo: null
    });
  };

  //In RegisterBackyardPage.js
  _onEdit = hostInfo => {
    console.log('inside onEdit');
    //updateListing
  };

  //In RegisterBackyardPage.js
  _onDelete = ({ hostInfo }) => {
    console.log('inside onDelete');

    this.props.store.dispatch(deleteListingProcess(hostInfo));
  };

  _onLove = hostInfo => {
    console.log('inside onLove');

    this.props.store.dispatch(getOneListingProcess(hostInfo));
  };
}

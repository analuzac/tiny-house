import React, { Component } from 'react';
import RegisterBackyardPage from './components/RegisterBackyardPage';
import ViewListingsPage from './components/ViewListingsPage';
import DetailedListingPage from './components/DetailedListingPage';
import getListings from './api/getListings';
import getOneListing from './api/getOneListing';
import createListing from './api/createListing';
import deleteListing from './api/deleteListing';

export default class App extends Component {
  state = {
    listingItems: [],
    hostInfo: null
  };
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
    getListings().then(listingItems => {
      //console.log('do i get inside DidMount?');
      this.setState({
        listingItems: listingItems
      });
    });
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

    createListing(composedListing).then(listing => {
      this.setState(prevState => {
        const listingItems = prevState.listingItems.slice(0);
        listingItems.push(listing);
        return { hostInfo: listing, listingItems: listingItems };
      });
    });
  };

  //In RegisterBackyardPage.js for closeSucessMessage
  _submitForm = hostInfo => {
    console.log('inside submitForm', hostInfo);

    // this.setState({
    //   hostInfo: hostInfo
    // });
  };

  //In RegisterBackyardPage.js
  _closeSuccessMessage = () => {
    this.setState({
      hostInfo: null
    });
  };

  //In RegisterBackyardPage.js
  _onEdit = hostInfo => {
    console.log('touched onEdit');
    //updateListing
  };

  //In RegisterBackyardPage.js
  _onDelete = ({ hostInfo }) => {
    console.log('touched onDelete');
    //console.log(hostInfo.id);
    let listingId = this.state.hostInfo.id;
    //console.log(this.state.listingItems);

    //deleteListing
    this.state.listingItems.forEach(listingItem => {
      if (listingId === listingItem.id) {
        deleteListing(listingId).then(wasDeleted => {
          //console.log('do i get inside deleteListing?');
          this.setState({ hostInfo: null });
          return wasDeleted;
        });
      }
    });
  };

  _onLove = hostInfo => {
    console.log('touched onLove');
    //updateListing
    console.log('whats in the state', this.state.hostInfo);
    console.log('inside onLove, before dispatch', hostInfo);
    let listingId = hostInfo.id;
    //console.log(listingId);
    getOneListing(listingId).then(listing => {
      //console.log('do i get inside DidMount?');
      console.log('inside onLove, after dispatch', listing);
      this.setState({
        hostInfo: listing
      });
    });

    console.log('whats in the state', this.state.hostInfo);
  };
}

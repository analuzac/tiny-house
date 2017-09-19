import React, { Component } from 'react';
import RegisterBackyardPage from './components/RegisterBackyardPage';
import ViewListingsPage from './components/ViewListingsPage';
import getListingItems from './requests/getListingItems';

export default class App extends Component {
  state = {
    listingItems: [],
    hostInfo: null
  };
  render() {
    return (
      <RegisterBackyardPage
        hostInfo={this.state.hostInfo}
        addListing={this._addListing}
        onSubmit={this._submitForm}
        onClose={this._closeSuccessMessage}
      />,
     <ViewListingsPage listingItems={this.state.listingItems} />;
    )
  }

  //In ViewLIstingsPage.js
  componentDidMount() {
    getListingItems().then(listingItems => {
      this.setState({
        listingItems
      });
    });
  }

  //In RegisterBackyardPage.js to send to API
  _addListing =  hostInfo  => {
    //add a new item to the listingItems
    this.setState(prevState => {
      const listingItems = prevState.listingItems.slice(0);
      listingItems.push( hostInfo );
      return {
        listinglItems
      };
    });
  };

  //In RegisterBackyardPage.js for closeSucessMessage
  _submitForm = hostInfo  => {
    this.setState({
      hostInfo: hostInfo
    });
  };

  //In RegisterBackyardPage.js
  _closeSuccessMessage = () => {
    this.setState({
      hostInfo: null
    });
  };
}

import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import RegisterBackyardPageContainer from './redux/containers/RegisterBackyardPageContainer';
import ViewListingsPageContainer from './redux/containers/ViewListingsPageContainer';
import DetailedListingPageContainer from './redux/containers/DetailedListingPageContainer';

import setupStore from './redux/setupStore';
import { Provider } from 'react-redux';
const store = setupStore();

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={ViewListingsPageContainer} />
              <Route
                exact
                path="/backyards/:backyardId"
                component={DetailedListingPageContainer}
              />
              <Route
                exact
                path="/registration"
                component={RegisterBackyardPageContainer}
              />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

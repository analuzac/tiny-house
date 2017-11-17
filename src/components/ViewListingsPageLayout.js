import React from 'react';

import { Link } from 'react-router-dom';

import ListingsComponent from './ListingsComponent';
import FilterComponent from './FilterComponent';
import SortComponent from './SortComponent';

export default function ViewListingsPageLayout({
  listingItems,
  hostInfo,
  onLove,
  onSort,
  onFilter,
  history,
  errorMsg
}) {
  if (listingItems !== null) {
    return (
      <div className="ViewListingsPageLayout">
        <header>
          <nav>
            <div className="nav-wrapper indigo">
              <Link to="/" className="brand-logo">
                Tiny House Hosting
              </Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                  <Link to="/login">Log In / Log Out</Link>
                </li>
                <li>
                  <Link to="/registration">List Your Backyard</Link>
                </li>
                <li>
                  <Link to="/">Explore</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        {/* sort & filter code */}
        <div className="row">
          <div className="input-field col s12 m6">
            {<FilterComponent onFilter={onFilter} />}
          </div>
          <div className="input-field col s12 m6">
            {<SortComponent onSort={onSort} />}
          </div>
        </div>
        {
          <div className="container">
            <div className="section">
              <div className="row">
                <h5 style={styles.errorStyle}>
                  {errorMsg ? errorMsg : null}
                </h5>
              </div>
            </div>
          </div>
        }
        {/* display widgets code */}
        <div className="container">
          <div className="section">
            <div className="row">
              {
                <ListingsComponent
                  listingItems={listingItems}
                  hostInfo={hostInfo}
                  onLove={onLove}
                  history={history}
                  errorMsg={errorMsg}
                />
              }
            </div>
          </div>
        </div>

        <footer className="page-footer indigo">
          <div className="footer-copyright indigo">
            <div className="container">2017 Tiny House Village </div>
          </div>
        </footer>
      </div>
    );
  } else {
    return <div>LOADING ONE SECOND :P</div>;
  }
}

const styles = {
  errorStyle: {
    color: 'red',
    fontWeight: 'bold'
  }
};

import React from 'react';

import DetailedWidgetComponent from './DetailedWidgetComponent';

export default function DetailedListingPageLayout({ hostInfo }) {
  if (hostInfo !== null) {
    return (
      <div className="DetailedListingPageLayout">
        <header>
          <nav>
            <div className="nav-wrapper indigo">
              <a href="index.html" className="brand-logo">
                Tiny House Hosting
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <a href="#!">List Your Backyard</a>
                </li>
                <li>
                  <a href="#!">Explore</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <div className="container">
          <div className="section">
            <div className="row">
              <DetailedWidgetComponent hostInfo={hostInfo} />
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

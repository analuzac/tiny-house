import React from 'react';

import WidgetComponent from './WidgetComponent';

export default function ViewListingsPageLayout({
  listingItems,
  hostInfo,
  onLove
}) {
  //console.log(listingItems);
  if (listingItems !== null) {
    return (
      <div className="ViewListingsPageLayout">
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
        {/* sort & filter code */}

        {/* display widgets code */}
        <div className="container">
          <div className="section">
            <div className="row">
              {listingItems.map(listingItem =>
                <WidgetComponent
                  key={listingItem.id}
                  hostInfo={listingItem}
                  onLove={onLove}
                />
              )}
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

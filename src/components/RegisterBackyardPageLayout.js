import React from 'react';

export default function RegisterBackyardPageLayout({ children }) {
  return (
    <div className="RegisterBackyardPageLayout">
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
            {children}
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
}

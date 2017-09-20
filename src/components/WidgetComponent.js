import React from 'react';

export default function WidgetComponent({ hostInfo, onLove }) {
  function handleLove(event) {
    event.preventDefault();
    console.log('inside WidgetComponent', event);
    onLove(hostInfo);
  }
  return (
    <div className="row">
      <div className="col s12 m8">
        <div className="card">
          <div className="card-image">
            <img src="https://i.pinimg.com/736x/17/d6/fb/17d6fbf77448ad0c2fe0d7b8d19dceea--moss-lawn-backyard-trees.jpg" />
            <a
              onClick={handleLove}
              className="btn-floating halfway-fab waves-effect waves-light red">
              <i className="material-icons">favorite</i>
            </a>
            <div className="card-title">
              <h4>
                {hostInfo.coordinates}
              </h4>
              <p>
                {`$${hostInfo.rent}/month for ${hostInfo.dimensions}sqft`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

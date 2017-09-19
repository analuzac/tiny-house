import React from 'react';

export default function WidgetComponent({ hostInfo }) {
  return (
    <div className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <img src="https://i.pinimg.com/736x/17/d6/fb/17d6fbf77448ad0c2fe0d7b8d19dceea--moss-lawn-backyard-trees.jpg" />
            <div className="card-title">
              <h4>
                {hostInfo.address}
              </h4>
              <p>
                {`$${hostInfo.rent}/month for ${hostInfo.dimensions}sqft`}
              </p>
              <p>
                {`Available starting ${hostInfo.date}`}
              </p>
              <p>
                {`Amenities include access to ${hostInfo.amenities}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

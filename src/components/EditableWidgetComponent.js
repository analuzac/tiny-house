import React from 'react';

export default function EditableWidgetComponent({
  hostInfo,
  onEdit,
  onDelete
}) {
  function handleDelete(event) {
    event.preventDefault();
    onDelete(hostInfo);
  }

  function handleEdit(event) {
    event.preventDefault();
    onEdit(hostInfo);
  }

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
          <button
            id="submit-button"
            type="submit"
            name="action"
            className="btn-large waves-effect waves-light green lighten-1"
            onClick={handleEdit}>
            EDIT LISTING
          </button>
          <button
            id="submit-button"
            type="submit"
            name="action"
            className="btn-large waves-effect waves-light green lighten-1"
            onClick={handleDelete}>
            DELETE LISTING
          </button>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

import SuccessMessageComponent from './SuccessMessageComponent';
import EditableWidgetComponent from './EditableWidgetComponent';

export default function SuccessfulListingComponent({
  hostInfo,
  onClose,
  onDelete,
  history,
  errorMsg
}) {
  return (
    <div className="section">
      <div className="row">
        <div className="col s12 m4">
          <SuccessMessageComponent hostInfo={hostInfo} onClose={onClose} />
        </div>
        <div className="col s12 m8">
          <EditableWidgetComponent hostInfo={hostInfo} onDelete={onDelete} />
          {
            <h5 style={styles.errorStyle}>
              {errorMsg ? errorMsg : null}
            </h5>
          }
        </div>
      </div>
    </div>
  );
}

const styles = {
  errorStyle: {
    color: 'red',
    fontWeight: 'bold'
  }
};

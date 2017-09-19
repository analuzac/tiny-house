import React from 'react';

import SuccessMessageComponent from './SuccessMessageComponent';
import WidgetComponent from './WidgetComponent';

export default function SuccessfulListingComponent({ hostInfo, onClose }) {
  return (
    <div class="section">
      <div class="row">
        <div class="col s12 m6">
          <SuccessMessageComponent hostInfo={hostInfo} onClose={onClose} />
        </div>
        <div class="col s12 m6">
          <WidgetComponent hostInfo={hostInfo} />
        </div>
      </div>
    </div>
  );
}

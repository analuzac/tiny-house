import React from 'react';

import UpdateListingPageLayout from './UpdateListingPageLayout';

export default function UpdateListingPage({ hostInfo, onUpdate, history }) {
  return (
    <div className="DetailedListingPage">
      <UpdateListingPageLayout
        hostInfo={hostInfo}
        onUpdate={onUpdate}
        history={history}
      />
    </div>
  );
}

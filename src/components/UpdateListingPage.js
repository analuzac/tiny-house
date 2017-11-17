import React from 'react';

import UpdateListingPageLayout from './UpdateListingPageLayout';

export default function UpdateListingPage({
  hostInfo,
  onUpdate,
  history,
  errorMsg
}) {
  return (
    <div className="DetailedListingPage">
      <UpdateListingPageLayout
        hostInfo={hostInfo}
        onUpdate={onUpdate}
        history={history}
        errorMsg={errorMsg}
      />
    </div>
  );
}

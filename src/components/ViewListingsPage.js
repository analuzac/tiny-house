import React from 'react';

import ViewListingsPageLayout from './ViewListingsPageLayout';

export default function ViewListingsPage({ listingItems, hostInfo, onLove }) {
  return (
    <div className="ViewListingsPage">
      <ViewListingsPageLayout
        listingItems={listingItems}
        hostInfo={hostInfo}
        onLove={onLove}
      />
    </div>
  );
}

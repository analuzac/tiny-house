import React from 'react';

import ViewListingsPageLayout from './ViewListingsPageLayout';

export default function ViewListingsPage({
  listingItems,
  hostInfo,
  onLove,
  onSort,
  onFilter,
  errorMsg
}) {
  return (
    <div className="ViewListingsPage">
      <ViewListingsPageLayout
        listingItems={listingItems}
        hostInfo={hostInfo}
        onLove={onLove}
        onSort={onSort}
        onFilter={onFilter}
        errorMsg={errorMsg}
      />
    </div>
  );
}

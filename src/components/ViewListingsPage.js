import React from 'react';

import ViewListingsPageLayout from './ViewListingsPageLayout';

export default function ViewListingsPage({ listingItems }) {
  return (
    <div className="ViewListingsPage">
      <ViewListingsPageLayout listingItems={listingItems} />
    </div>
  );
}

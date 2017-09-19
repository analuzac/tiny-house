import React from 'react';

import ViewListingsPageLayout from './ViewListingsPageLayout';

export default function OrderPage({ listingItems }) {
  return (
    <div className="OrderPage">
      <ViewListingsPageLayout listingItems={listingItems} />
    </div>
  );
}

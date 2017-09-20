import React from 'react';

import DetailedListingPageLayout from './DetailedListingPageLayout';

export default function DetailedListingPage({ hostInfo }) {
  return (
    <div className="DetailedListingPage">
      <DetailedListingPageLayout hostInfo={hostInfo} />
    </div>
  );
}

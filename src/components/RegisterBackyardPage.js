import React from 'react';

import RegisterBackyardPageLayout from './RegisterBackyardPageLayout';
import FormComponent from './FormComponent';
import SuccessfulListingComponent from './SuccessfulListingComponent';

export default function RegisterBackyardPage({
  hostInfo,
  onClose,
  onSubmit,
  addListing
}) {
  return (
    <div className="RegisterBackyardPage">
      <RegisterBackyardPageLayout>
        {hostInfo
          ? <SuccessfulListingComponent hostInfo={hostInfo} onClose={onClose} />
          : <FormComponent onSubmit={onSubmit} addListing={addListing} />}
      </RegisterBackyardPageLayout>
    </div>
  );
}

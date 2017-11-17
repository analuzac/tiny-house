import React from 'react';

import RegisterBackyardPageLayout from './RegisterBackyardPageLayout';
import FormComponent from './FormComponent';
import SuccessfulListingComponent from './SuccessfulListingComponent';

export default function RegisterBackyardPage({
  hostInfo,
  onClose,
  onDelete,
  addListing,
  history,
  errorMsg
}) {
  return (
    <div className="RegisterBackyardPage">
      <RegisterBackyardPageLayout>
        {hostInfo
          ? <SuccessfulListingComponent
              hostInfo={hostInfo}
              onClose={onClose}
              onDelete={onDelete}
              history={history}
              errorMsg={errorMsg}
            />
          : <FormComponent
              addListing={addListing}
              history={history}
              errorMsg={errorMsg}
            />}
      </RegisterBackyardPageLayout>
    </div>
  );
}

import React from 'react';

import WidgetComponent from './WidgetComponent';

export default function({ listingItems, onLove, history, errorMsg }) {
  // if (listingItems !== null) {
  return (
    <div className="ListingsComponent">
      {listingItems.length > 0 &&
        listingItems.map(listingItem =>
          <WidgetComponent
            key={listingItem.id}
            hostInfo={listingItem}
            onLove={onLove}
            history={history}
            errorMsg={errorMsg}
          />
        )}
      {!listingItems ||
        (listingItems.length === 0 && <div>LOADING ONE SECOND :P</div>)}
    </div>
  );
  // } else {
  // return <div>LOADING ONE SECOND :P</div>;
  // }
}

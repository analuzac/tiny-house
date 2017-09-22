import React from 'react';

import WidgetComponent from './WidgetComponent';

export default function ListingsComponent({ listingItems, onLove }) {
  if (listingItems !== null) {
    return (
      <div className="ListingsComponent">
        {listingItems.map(listingItem =>
          <WidgetComponent
            key={listingItem.id}
            hostInfo={listingItem}
            onLove={onLove}
          />
        )}
      </div>
    );
  } else {
    return <div>LOADING ONE SECOND :P</div>;
  }
}

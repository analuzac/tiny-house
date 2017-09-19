import React from 'react';

import WidgetComponent from './WidgetComponent';

export default function ListingsComponent({ listingItems }) {
  if (listingItems !== null) {
    return (
      <div className="ListingsComponent">
        {listingItems.map(listingItem =>
          <WidgetComponent key={listingItem.id} hostInfo={listingItem} />
        )}
      </div>
    );
  } else {
    return <div>LOADING ONE SECOND :P</div>;
  }
}

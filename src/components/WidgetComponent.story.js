import React from 'react';
import { storiesOf } from '@storybook/react';
import WidgetComponent from './WidgetComponent';

let hostInfo = {
  rent: 500,
  dimensions: 300,
  address: '2244 Martin Luther King Jr. Way, Berkeley, CA, 94704',
  date: 'September 23, 2017',
  amenities: 'washer/dryer, water hose, compost/recycling/trash bins'
  //   imagePath: '//via.placeholder.com/300x200'
};

storiesOf('WidgetComponent', module).add('happy path', () =>
  <WidgetComponent hostInfo={hostInfo} />
);

import React from 'react';
import { storiesOf } from '@storybook/react';
import UpdateFormComponent from './UpdateFormComponent';

// let hostInfo = {
//   rent: 500,
//   dimensions: 300,
//   coordinates: 'Berkeley, CA',
//   date: 'September 23, 2017',
//   amenities: 'washer/dryer, water hose, compost/recycling/trash bins'
//   //   imagePath: '//via.placeholder.com/300x200'
// };

storiesOf('UpdateFormComponent', module).add('happy path', () =>
  <UpdateFormComponent onSubmit={hostInfo => console.log(hostInfo)} />
);

import React from 'react';
import { storiesOf } from '@storybook/react';
import SuccessMessageComponent from './SuccessMessageComponent';

storiesOf('SuccessMessageComponent', module).add('To test onSubmit', () =>
  <SuccessMessageComponent
    onClose={console.log('SUBMIT LISTING button was hit')}
  />
);

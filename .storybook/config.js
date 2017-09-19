import { configure } from '@storybook/react';
function loadStories() {
  require('../src/index.css');
  // Require your stories here...
  require('../src/components/FormComponent.story');
  require('../src/components/WidgetComponent.story');
  require('../src/components/SuccessMessageComponent.story');
  require('../src/components/SuccessfulListingComponent.story');
  require('../src/components/ListingsComponent.story');
}
configure(loadStories, module);

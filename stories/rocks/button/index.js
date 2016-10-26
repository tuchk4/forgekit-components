import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { text, select, boolean } from '@kadira/storybook-addon-knobs';
import withReadme from 'storybook-readme/with-readme';

import ButtonRocks from 'rocks/button';

const icons = {
  '': 'No icon',
  code: 'code',
  mail: 'mail',
};

const iconPositions = {
  left: 'left',
  right: 'right',
};

storiesOf('Rocks Button')
  .addWithInfo('Default button', () => {
    return (<ButtonRocks
      iconPosition={select('Position', iconPositions, 'left')}
      icon={select('Icon', icons, 'code')}
      warning={boolean('warning', false)}
      alert={boolean('alert', false)}
    >
      {text('Label', 'Hello world')}
    </ButtonRocks>);
  });

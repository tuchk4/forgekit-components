import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { text, select, boolean } from '@kadira/storybook-addon-knobs';
// import withReadme from 'storybook-readme/with-readme';

import Button from './forge-components/button';
import ButtonWithAllFeatures from './forge-components/button-with-all-features';
import ButtonWithFlags from './forge-components/button-with-flags';
import ButtonWithIcon from './forge-components/button-with-icon';
import ButtonWithСofiguredFlags from './forge-components/button-with-flags-configured';

const icons = {
  '': 'No icon',
  code: 'code',
  mail: 'mail',
};

const iconPositions = {
  left: 'left',
  right: 'right',
};

storiesOf('Buttons')
  .addWithInfo('Default button', () => (
    <Button>
      {text('Label', 'Hello world')}
    </Button>
  ))
  .addWithInfo('Icons', () => (
    <ButtonWithIcon
      iconPosition={select('Position', iconPositions, 'left')}
      icon={select('Icon', icons, 'code')}
    >
      {text('Label', 'Hello world')}
    </ButtonWithIcon>
  ))
  .addWithInfo('Flags', () => (
    <ButtonWithFlags
      warning={boolean('warning', false)}
      alert={boolean('alert', false)}
    >
      {text('Label', 'Hello world')}
    </ButtonWithFlags>
  ))
  .addWithInfo('Сofigured Flags', () => (
    <ButtonWithСofiguredFlags
      warning={boolean('warning', false)}
      alert={boolean('alert', false)}
    >
      {text('Label', 'Hello world')}
    </ButtonWithСofiguredFlags>
  ))
  .addWithInfo('All Features', () => (
    <ButtonWithAllFeatures
      clickValue={text('Click value', 'SET ANY CLICK VALUE')}
      onClick={action('All features')}
      iconPosition={select('Position', iconPositions, 'left')}
      icon={select('Icon', icons, 'code')}
      warning={boolean('warning', false)}
      alert={boolean('alert', false)}
    >
      {text('Label', 'Hello world')}
    </ButtonWithAllFeatures>
  ));

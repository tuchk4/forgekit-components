import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { text, select, boolean } from '@kadira/storybook-addon-knobs';
import withReadme from 'storybook-readme/with-readme';

import ButtonREADME from 'components/button/README.md';
import iconFeatureREADME from 'components/button/features/icon/README.md';
import flagsFeatureREADME from 'features/highlite-flags/README.md';
import clickValueFeatureREADME from 'components/button/features/click-value/README.md';

import Button from './forge-components/button';
import ButtonWithAllFeatures from './forge-components/button-with-all-features';
import ButtonWithFlags from './forge-components/button-with-flags';
import ButtonWithIcon from './forge-components/button-with-icon';
import ButtonWithCofiguredFlags from './forge-components/button-with-flags-configured';

// ROCKS stories
import './rocks/button';

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
  .addWithInfo('Default button', withReadme([
    ButtonREADME,
  ], () => (
    <Button>
      {text('Label', 'Hello world')}
    </Button>
  )))
  .addWithInfo('Icons', withReadme([
    ButtonREADME,
    iconFeatureREADME,
  ], () => (
    <ButtonWithIcon
      iconPosition={select('Position', iconPositions, 'left')}
      icon={select('Icon', icons, 'code')}
    >
      {text('Label', 'Hello world')}
    </ButtonWithIcon>
  )))
  .addWithInfo('Flags', withReadme([
    ButtonREADME,
    flagsFeatureREADME,
  ], () => (
    <ButtonWithFlags
      warning={boolean('warning', false)}
      alert={boolean('alert', false)}
    >
      {text('Label', 'Hello world')}
    </ButtonWithFlags>
  )))
  .addWithInfo('Сofigured Flags', withReadme([
    ButtonREADME,
    flagsFeatureREADME,
  ], () => (
    <ButtonWithCofiguredFlags
      warning={boolean('warning', false)}
      alert={boolean('alert', false)}
    >
      {text('Label', 'Hello world')}
    </ButtonWithCofiguredFlags>
  )))
  .addWithInfo('All Features', withReadme([
    ButtonREADME,
    iconFeatureREADME,
    flagsFeatureREADME,
    clickValueFeatureREADME,
  ], () => (
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
  )));

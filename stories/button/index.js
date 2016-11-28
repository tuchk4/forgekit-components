import React from 'react';
import forgekit  from 'forgekit';

import { storiesOf, action } from '@kadira/storybook';
import { text, select, boolean } from '@kadira/storybook-addon-knobs';
import withReadme from 'storybook-readme/with-readme';

import buttonREADME from 'forgkit-components/components/button/README.md';
import iconFeatureREADME from 'forgkit-components/components/button/features/icon/README.md';
import flagsFeatureREADME from 'forgkit-components/features/highlite-flags/README.md';
import clickValueFeatureREADME from 'forgkit-components/components/button/features/click-value/README.md';
import сlickOutsideREADME from 'forgkit-components/features/click-outside/README.md';

import Button from 'forgkit-components/components/button';

import iconFeature from 'forgkit-components/components/button/features/icon';
import flagsFeature from 'forgkit-components/features/highlite-flags';
import clickValueFeature from 'forgkit-components/components/button/features/click-value';
import сlickOutsideFeature from 'forgkit-components/features/click-outside';


const icons = {
  '': 'No icon',
  code: 'code',
  mail: 'mail',
};

const iconPositions = {
  left: 'left',
  right: 'right',
};

const ButtonFlags = forgekit(flagsFeature)(Button);
const ButtonFlagsIcon = forgekit(flagsFeature, iconFeature)(Button);
// const ButtonFlagsIconOutside = forgekit(flagsFeature, iconFeature, сlickOutside)(Button);
const ButtonWithAllFeatures = forgekit(flagsFeature, iconFeature, сlickOutsideFeature, clickValueFeature)(Button);

storiesOf('Buttons', module)
  .addWithInfo('Default button', withReadme([
    buttonREADME,
  ], () => (
    <Button>
      {text('Label', 'Hello world')}
    </Button>
  )))
  .addWithInfo('With highlite', withReadme([
    buttonREADME,
    flagsFeatureREADME
  ], () => (
    <ButtonFlags
      danger={boolean('danger', false)}
      success={boolean('success', false)}
      warning={boolean('warning', false)}>
      {text('Label', 'Hello world')}
    </ButtonFlags>
  )))
  .addWithInfo('With highlite and icon', withReadme([
    buttonREADME,
    flagsFeatureREADME,
    iconFeatureREADME
  ], () => (
    <ButtonFlagsIcon
      danger={boolean('danger', false)}
      success={boolean('success', false)}
      warning={boolean('warning', false)}
      icon={select('icon', icons)}
      iconPosition={select('position', iconPositions)}>
      {text('Label', 'Hello world')}
    </ButtonFlagsIcon>
  )))
  .addWithInfo('With all features', withReadme([
    buttonREADME,
    flagsFeatureREADME,
    iconFeatureREADME,
    clickValueFeatureREADME,
    сlickOutsideREADME
  ], () => (
    <ButtonWithAllFeatures
      clickValue={text('Click value', 'foo bar')}
      onClick={action('button click')}
      onClickOutside={action('button outside click')}
      danger={boolean('danger', false)}
      success={boolean('success', false)}
      warning={boolean('warning', false)}
      icon={select('icon', icons)}
      iconPosition={select('position', iconPositions)}>
      {text('Label', 'Hello world')}
    </ButtonWithAllFeatures>
  )))

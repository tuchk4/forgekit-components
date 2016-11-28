import React from 'react';
import forgekit  from 'forgekit';

import { storiesOf, action } from '@kadira/storybook';
import { text, select, boolean } from '@kadira/storybook-addon-knobs';
import withReadme from 'storybook-readme/with-readme';

import materialButtonREADME from 'material-forgkit-components/components/button/README.md';

import iconFeatureREADME from 'forgkit-components/components/button/features/icon/README.md';
import raisedREADME from 'forgkit-components/features/raised/README.md';
import flagsFeatureREADME from 'forgkit-components/features/highlite-flags/README.md';
import clickValueFeatureREADME from 'forgkit-components/components/button/features/click-value/README.md';
import сlickOutsideREADME from 'forgkit-components/features/click-outside/README.md';

import MaterialButton from 'material-forgkit-components/components/button';

import flagsFeature from 'forgkit-components/features/highlite-flags';
import clickValueFeature from 'forgkit-components/components/button/features/click-value';
import сlickOutsideFeature from 'forgkit-components/features/click-outside';

import raisedAndFlagsResolverStyles from './raised-and-flags-resolver.css';

const icons = {
  '': 'No icon',
  code: 'code',
  mail: 'mail',
};

const iconPositions = {
  left: 'left',
  right: 'right',
};

const raisedAndFlagsResovler =({
  success,
  danger,
  raised,
  theme,
  ...props
}) => {

  const resolvedTheme = {};

  if (success && raised) {
    // succes - theme for flagsFeature
    resolvedTheme.success = raisedAndFlagsResolverStyles.successRaised;
  }

  if (danger && raised) {
    // danger - theme for flagsFeature
    resolvedTheme.danger = raisedAndFlagsResolverStyles.dangerRaised;
  }

  return {
    ...props,
    theme: {
      ...theme,
      ...resolvedTheme
    },
  };
}


const MaterialButtonFlags = forgekit(flagsFeature)(MaterialButton, 'MaterialButton', raisedAndFlagsResovler);
const MaterialButtonWithAllFeatures = forgekit(
  flagsFeature,
  сlickOutsideFeature,
  clickValueFeature
)(MaterialButton,  'MaterialButton', raisedAndFlagsResovler);

storiesOf('Material Buttons', module)
  .addWithInfo('Default button', withReadme([
    materialButtonREADME,
    raisedREADME,
    iconFeatureREADME
  ], () => (
    <MaterialButton
      raised={boolean('Raised', true)}
      icon={select('icon', icons)}
      iconPosition={select('position', iconPositions)}>
      {text('Label', 'Hello world')}
    </MaterialButton>
  )))
  .addWithInfo('With highlite', withReadme([
    materialButtonREADME,
    flagsFeatureREADME
  ], () => (
    <MaterialButtonFlags
      raised={boolean('Raised', true)}
      icon={select('icon', icons)}
      iconPosition={select('position', iconPositions)}
      danger={boolean('danger', false)}
      success={boolean('success', false)}
      warning={boolean('warning', false)}>
      {text('Label', 'Hello world')}
    </MaterialButtonFlags>
  )))
  .addWithInfo('With all features', withReadme([
    materialButtonREADME,
    raisedREADME,
    flagsFeatureREADME,
    iconFeatureREADME,
    clickValueFeatureREADME,
    сlickOutsideREADME
  ], () => (
    <MaterialButtonWithAllFeatures
      raised={boolean('Raised', true)}
      clickValue={text('Click value', 'foo bar')}
      onClick={action('button click')}
      onClickOutside={action('button outside click')}
      danger={boolean('danger', false)}
      success={boolean('success', false)}
      warning={boolean('warning', false)}
      icon={select('icon', icons)}
      iconPosition={select('position', iconPositions)}>
      {text('Label', 'Hello world')}
    </MaterialButtonWithAllFeatures>
  )))

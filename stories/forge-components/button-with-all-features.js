import forge from 'forgekit';

import Button from 'components/button';

// Features
import highliteFlagsFeature from 'features/highlite-flags';
import iconFeature from 'components/button/features/icon';
import clickValueFeature from 'components/button/features/click-value';

export default forge(
  iconFeature,
  clickValueFeature,
  highliteFlagsFeature
)(Button, 'ButtonWithAllFeatures');

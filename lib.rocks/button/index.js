import forge from 'forgekit';

import Button from 'components/button';

// Features
// import themable from 'features/theme';
import highliteFlagsFeature from 'features/highlite-flags';
import iconFeature from 'components/button/features/icon';
import theme from './button.css';

export default forge(
  iconFeature,
  highliteFlagsFeature,
)(Button, 'ButtonRocks', {
  theme: {
    style: theme.style,
    base: theme.base,
  },
});

import forge from 'forgekit';

import Button from 'components/button';
import styles from './button.css';

// Features
import theme from 'features/theme';
import highliteFlagsFeature from 'features/highlite-flags';
import iconFeature from 'components/button/features/icon';

export default forge(
  iconFeature,
  highliteFlagsFeature,
  theme({
    style: styles.style,
  })
)(Button, 'ButtonRocks');

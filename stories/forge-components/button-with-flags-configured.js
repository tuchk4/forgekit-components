import forge from 'forgekit';

import Button from 'components/button';
import { configure as highliteFlagsFeature } from 'features/highlite-flags';
import customFlagsStyles from './flags-configured.css';

const configuredFlags = highliteFlagsFeature({
  alert: customFlagsStyles.alert,
});

const ButtonWithCofiguredFlags = forge(configuredFlags)(Button, 'ButtonWithCofiguredFlags');
export default ButtonWithCofiguredFlags;

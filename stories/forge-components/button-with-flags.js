import forge from 'forgekit';

import Button from 'components/button';
import highliteFlagsFeature from 'features/highlite-flags';

export default forge(highliteFlagsFeature)(Button, 'ButtonWithFlags');

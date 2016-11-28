import forge from 'forgekit';

// TODO: remove relative paths
import Button from '../../../lib/components/button';

// Button features
import icon from '../../../lib/components/button/features/icon';
import raised from '../../../lib/features/raised';

// Custom styles
import materialButtonStyles from './material-button.css';

const MaterialButton = forge(icon, raised)(Button, 'MaterialButton', {
  theme: {
    style: materialButtonStyles.materialButton
  }
});

export default MaterialButton;

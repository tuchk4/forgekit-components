import { configure, setAddon, addDecorator } from '@kadira/storybook';
import { withKnobs } from '@kadira/storybook-addon-knobs';
import { setOptions } from '@kadira/storybook-addon-options';
import centered from '@kadira/react-storybook-decorator-centered';
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);

addDecorator(withKnobs);
addDecorator(centered);

setOptions({
  name: 'Forgekit',
  url: 'https://github.com/tuchk4/forgekit-components',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
});


configure(() => require('../stories'), module);

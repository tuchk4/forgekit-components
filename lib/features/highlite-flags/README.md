# Highlite flags

* Link to [github feature implementation](https://github.com/tuchk4/forgekit-components/blob/master/lib/features/highlite-flags/index.js)

```js
import highliteFlagsFeature from 'features/highlite-flags';
```

Something like twitter bootstrap flags: primary / danger / success / info etc.

```css
.alert {
  color: #cc0000;
}

.warning {
  color: #ffcc33;
}
```


## Prop types

* alert - bool
* warning - bool

## Example usage

```js
import forge from 'forgekit';

import Button from 'components/button';
import highliteFlagsFeature from 'features/highlite-flags';

export default forge(highliteFlagsFeature)(Button, 'ButtonWithFlags');
```

## Configured forge

```js
import forge from 'forgekit';

import Button from 'components/button';
import highliteFlagsFeature from 'features/highlite-flags';
import customFlagsStyles from './custom-flags-styles.css';

const configuredFlags = highliteFlagsFeature.configure({
  alert: customFlagsStyles.alert // { background: red, color: white }
});

export default forge(customFlagsStyles)(Button, 'ButtonWithFlags');
```

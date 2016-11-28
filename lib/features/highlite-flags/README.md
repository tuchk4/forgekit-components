# Feature: Highlite flags

* [Highlite flags feature isources at Github](https://github.com/tuchk4/forgekit-components/blob/master/lib/features/highlite-flags/index.js)

```js
import highliteFlagsFeature from 'forgekit-components/features/highlite-flags';
```

Something like twitter bootstrap flags: primary / danger / success / info etc.

## Prop types

* success - bool
* warning - bool
* danger - bool

## Example usage

```js
import forge from 'forgekit';

import Button from 'forgekit-components/components/button';
import highliteFlagsFeature from 'forgekit-components/features/highlite-flags';

export default forge(highliteFlagsFeature)(Button, 'ButtonWithFlags');
```

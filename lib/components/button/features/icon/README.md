# Feature: Icon

* Link to [icon feature implementation](https://github.com/tuchk4/forgekit-components/blob/master/lib/components/button/features/icon/index.js)

NOTE: could be used with any component. Not only with button. So should be moved from *components/button/features* to *features*

```js
import iconFeature from 'forgekit-components/components/button/features/icon';
```

Add icon with to left or right side of component children. Use [Material icons](https://design.google.com/icons/)

## Prop types

* icon - string
* iconPosition - one of *left* / *right*

## Example usage

```js
import forge from 'forgekit';

import Button from 'forgekit-components/components/button';
import iconFeature from 'forgekit-components/components/button/features/icon';

export default forge(iconFeature)(Button, 'ButtonWithIcon');
```

# Feature: Click value

* Link to [github feature implementation](https://github.com/tuchk4/forgekit-components/blob/master/lib/components/button/features/click-value/index.js)


NOTE: could be used with any component. Not only with button. So should be moved from *components/button/features* to *features*

```js
import clickValueFeature from 'components/button/features/click-value';
```

It is very useful to pass *value* prop to `Button` that will be available at any event callback.  Helps to prevent a lot of `func.bind(this, value)` usage.

## Prop types

* clickValue - any

## Example usage

```js
import forge from 'forgekit';

import Button from 'components/button';
import clickValueFeature from 'components/button/features/click-value';

const ButtonWithClickValue = forge(clickValueFeature)(Button, 'ButtonWithClickValue');

// ----
//
<ButtonWithClickValue
  clickValue={1}
  onClick={(value, e) => {
    console.log(value); // === 1
  }}>
  Click me
</ButtonWithClickValue>

```

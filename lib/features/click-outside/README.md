# Feature: Click outside

* Link to [click outside feature implementation](https://github.com/tuchk4/forgekit-components/blob/master/lib/features/click-outside/index.js)

```js
import clickOutsideFeature from 'forgekit-components/features/click-outside';
```

## Example usage

```js
import forge from 'forgekit';

import Button from 'forgekit-components/components/button';
import clickOutsideFeature from 'forgekit-components/features/click-outside';

export default forge(clickOutsideFeature)(Button, 'ButtonWithClickOutside');

<ButtonWithClickOutside
  onClickOutside={() => console.log('click outside')}>Click outside</ButtonWithClickOutside>
```

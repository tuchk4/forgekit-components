# <a href="https://github.com/tuchk4/forgekit"><img src="https://raw.githubusercontent.com/tuchk4/forgekit/release/2.0/logo/forgekit-logo-small.png"></a>

# React Forgekit components

**This project is still experimental, so feedback from component authors would be greatly appreciated!**

**Some code is still bad in this repo. Some parts are still confused. I will refactor / redev them in next commits**

* [Example storybook](https://tuchk4.github.io/forgekit-components/)
* [Forgekit documetation ](https://github.com/tuchk4/forgekit)

There is an early beginning of the project and there are not a lot of components and features.

Work with css:

* [postcss](https://github.com/postcss/postcss)
* [css-modules](https://github.com/css-modules/css-modules)
* [css-next](http://cssnext.io/)

**Components**

* [Button](https://github.com/tuchk4/forgekit-components/tree/master/lib/components/button)
* [Icon](https://github.com/tuchk4/forgekit-components/tree/master/lib/components/icon)
* [Material/Button](https://github.com/tuchk4/forgekit-components/tree/master/lib-material/components/button)

**Features**

* [Button/clickValue](https://github.com/tuchk4/forgekit-components/tree/master/lib/components/button/features/click-value)
* [Button/icon](https://github.com/tuchk4/forgekit-components/tree/master/lib/components/button/features/icon)
* [HighliteFlags](https://github.com/tuchk4/forgekit-components/tree/master/lib/features/highlite-flags)
* [Raised](https://github.com/tuchk4/forgekit-components/tree/master/lib/features/raised)
* [ClikcOutside](https://github.com/tuchk4/forgekit-components/tree/master/lib/features/click-outside)


## Little explanation

Forged components *propTypes* and *defaultProps* are merged from all features and origin component.
It is clear when use Storybook [info addon](https://github.com/storybooks/react-storybook-addon-info).

For example if look at `<MaterialButton/>` with all features:

| property               | propType  | required  |default  |
|------------------------|-----------|-----------|---------|
| warning                | bool      | no        | {false} |
| children               | node      | no        |         |
| success                | bool      | no        | {false} |
| disabled               | bool      | no        | {false} |
| clickValue             | any       | no        |         |
| className              | string    | no        |         |
| danger                 | bool      | no        | {false} |
| icon                   | string    | no        |         |
| iconPosition           | string    | no        | "left"  |
| onClick                | func      | no        |         |
| onClickOutside         | func      | no        |         |
| onClickOutsideEnabled  | bool      | no        | {true}  |
| raised                 | bool      | no        | {false} |


But there are now *propsTypes* and *defaultProps* at `<MaterialButton/>` [sources](https://github.com/tuchk4/forgekit-components/blob/master/lib-material/components/button/index.js).

* warning / success danger - from [features/highlite-flags](https://github.com/tuchk4/forgekit-components/blob/master/lib/features/highlite-flags/index.js)
* onClickOutsideEnabled / onClickOutside - from [features/click-outside](https://github.com/tuchk4/forgekit-components/blob/master/lib/features/click-outside/index.js)
* raised - from [features/raised](https://github.com/tuchk4/forgekit-components/blob/master/lib/features/raised/index.js)
* icon / iconPosition - from [components/button/features/icon](https://github.com/tuchk4/forgekit-components/blob/master/lib/components/button/features/icon/index.js)
* clickValue - form [components/button/features/click-value](https://github.com/tuchk4/forgekit-components/blob/master/lib/components/button/features/click-value/index.js)

and so on

:tada:

import React from 'react';
import { storiesOf } from '@kadira/storybook';

const styles = {
  main: {
    height: '1200px',
    fontFamily: '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif',
  },
};

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <div style={styles.main}>
      <a href="https://github.com/tuchk4/forgekit">
        <img src="https://raw.githubusercontent.com/tuchk4/forgekit/release/2.0/logo/forgekit-logo-small.png"/>
      </a>
      <h1>Welcome to Forgekit components</h1>
      <a href="https://github.com/tuchk4/forgekit">
        <img src="https://raw.githubusercontent.com/tuchk4/forgekit/release/2.0/logo/forgekit-logo-small.png"/>
      </a>
      <h1><a id="React_Forgekit_components_0"></a>React Forgekit components</h1>
      <p>
        <strong>This project is still experimental, so feedback from component authors would be greatly appreciated!</strong>
      </p>
      <ul>
        <li><a href="https://tuchk4.github.io/forgekit-components/">Example storybook</a></li>
        <li><a href="https://github.com/tuchk4/forgekit">Forgekit documetation </a></li>
      </ul>
      <p>There is an early beginning of the project and there are not a lot of components and features.</p>
      <p>Work with css:</p>
      <ul>
        <li><a href="https://github.com/postcss/postcss">postcss</a></li>
        <li><a href="https://github.com/css-modules/css-modules">css-modules</a></li>
        <li><a href="http://cssnext.io/">css-next</a></li>
      </ul>
      <p><strong>Components</strong></p>
      <ul>
        <li><a href="https://github.com/tuchk4/forgekit-components/tree/master/lib/components/button">Button</a></li>
        <li><a href="https://github.com/tuchk4/forgekit-components/tree/master/lib/components/icon">Icon</a></li>
        <li><a href="https://github.com/tuchk4/forgekit-components/tree/master/lib-material/components/button">Material/Button</a></li>
      </ul>
      <p><strong>Features</strong></p>
      <ul>
        <li><a href="https://github.com/tuchk4/forgekit-components/tree/master/lib/components/button/features/click-value">Button/clickValue</a></li>
        <li><a href="https://github.com/tuchk4/forgekit-components/tree/master/lib/components/button/features/icon">Button/icon</a></li>
        <li><a href="https://github.com/tuchk4/forgekit-components/tree/master/lib/features/highlite-flags">HighliteFlags</a></li>
        <li><a href="https://github.com/tuchk4/forgekit-components/tree/master/lib/features/raised">Raised</a></li>
        <li><a href="https://github.com/tuchk4/forgekit-components/tree/master/lib/features/click-outside">ClikcOutside</a></li>
      </ul>
      <h2><a id="Little_explanation_30"></a>Little explanation</h2>
      <p>
        Forged components <em>propTypes</em> and <em>defaultProps</em> are merged from all features and origin component.
        <br/>
        It is clear when use Storybook <a href="https://github.com/storybooks/react-storybook-addon-info">info addon</a>
      </p>
      <p>For example if look at <code>&lt;MaterialButton/&gt;</code> with all features:</p>
      <table>
        <thead>
          <tr>
            <th>property</th>
            <th>propType</th>
            <th>required</th>
            <th>default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>warning</td>
            <td>bool</td>
            <td>no</td>
            <td>{false}</td>
          </tr>
          <tr>
            <td>children</td>
            <td>node</td>
            <td>no</td>
            <td></td>
          </tr>
          <tr>
            <td>success</td>
            <td>bool</td>
            <td>no</td>
            <td>{false}</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>bool</td>
            <td>no</td>
            <td>{false}</td>
          </tr>
          <tr>
            <td>clickValue</td>
            <td>any</td>
            <td>no</td>
            <td></td>
          </tr>
          <tr>
            <td>className</td>
            <td>string</td>
            <td>no</td>
            <td></td>
          </tr>
          <tr>
            <td>danger</td>
            <td>bool</td>
            <td>no</td>
            <td>{false}</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>string</td>
            <td>no</td>
            <td></td>
          </tr>
          <tr>
            <td>iconPosition</td>
            <td>string</td>
            <td>no</td>
            <td>left</td>
          </tr>
          <tr>
            <td>onClick</td>
            <td>func</td>
            <td>no</td>
            <td></td>
          </tr>
          <tr>
            <td>onClickOutside</td>
            <td>func</td>
            <td>no</td>
            <td></td>
          </tr>
          <tr>
            <td>onClickOutsideEnabled</td>
            <td>bool</td>
            <td>no</td>
            <td>{true}</td>
          </tr>
          <tr>
            <td>raised</td>
            <td>bool</td>
            <td>no</td>
            <td>{false}</td>
          </tr>
        </tbody>
      </table>
      <p>But there are now <em>propsTypes</em> and <em>defaultProps</em> at <code>&lt;MaterialButton/&gt;</code> <a href="https://github.com/tuchk4/forgekit-components/blob/master/lib-material/components/button/index.js">sources</a>.</p>
      <ul>
        <li>warning / success danger - from <a href="https://github.com/tuchk4/forgekit-components/blob/master/lib/features/highlite-flags/index.js">features/highlite-flags</a></li>
        <li>onClickOutsideEnabled / onClickOutside - from <a href="https://github.com/tuchk4/forgekit-components/blob/master/lib/features/click-outside/index.js">features/click-outside</a></li>
        <li>raised - from <a href="https://github.com/tuchk4/forgekit-components/blob/master/lib/features/raised/index.js">features/raised</a></li>
        <li>icon / iconPosition - from <a href="https://github.com/tuchk4/forgekit-components/blob/master/lib/components/button/features/icon/index.js">components/button/features/icon</a></li>
        <li>clickValue - form <a href="https://github.com/tuchk4/forgekit-components/blob/master/lib/components/button/features/click-value/index.js">components/button/features/click-value</a></li>
      </ul>
      <p>and so on</p>
    </div>
  ));

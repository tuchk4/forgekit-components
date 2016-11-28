import React from 'react';
import { storiesOf } from '@kadira/storybook';

const styles = {
  main: {
    margin: 15,
    maxWidth: 600,
    lineHeight: 1.4,
    fontFamily: '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif',
  },

  logo: {
    width: 200,
  },

  link: {
    color: '#1474f3',
    textDecoration: 'none',
    borderBottom: '1px solid #1474f3',
    paddingBottom: 2,
  },

  code: {
    fontSize: 15,
    fontWeight: 600,
    padding: '2px 5px',
    border: '1px solid #eae9e9',
    borderRadius: 4,
    backgroundColor: '#f3f2f2',
    color: '#3a3a3a',
  },

  codeBlock: {
    backgroundColor: '#f3f2f2',
    padding: '1px 10px',
    margin: '10px 0',
  },
};

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <div style={styles.main}>
      <h1>Welcome to Forgekit components</h1>
      <a href="https://github.com/tuchk4/forgekit">
        <img src="https://raw.githubusercontent.com/tuchk4/forgekit/release/2.0/logo/forgekit-logo-small.png"/>
      </a>
      <ul>
        <li><a href="https://tuchk4.github.io/forgekit-components/">Example storybook</a></li>
        <li><a href="https://github.com/tuchk4/forgekit">Forgekit documetation</a></li>
      </ul>
      <p>
        There is an early beginning of the project and there are not a lot of components and features.
      </p>
    </div>
  ));

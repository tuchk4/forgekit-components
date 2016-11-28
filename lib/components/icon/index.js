import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { ThemeProp } from 'forgekit';

import styles from './icon.css';

const Icon = ({
  children,
  value,
  theme,
}) => {
  const classList = classnames(theme.iconCollection, theme.icon);

  return (
    <span className={classList}>
      { children || value }
    </span>
  );
};

Icon.propTypes = {
  children: PropTypes.node,
  value: PropTypes.string,
  theme: ThemeProp({
    iconCollection: PropTypes.string,
    icon: PropTypes.string,
  }),
};

Icon.defaultProps = {
  theme: {
    iconCollection: 'material-icons',
    icon: styles.icon,
  },
};

export default Icon;

import React, { PropTypes } from 'react';
import classnames from 'classnames';

import styles from './icon.css';

const Icon = ({
  children,
  value,
}) => {
  const classList = classnames('material-icons', styles.icon);

  return (
    <span className={classList}>
      { children || value }
    </span>
  );
};

Icon.propTypes = {
  children: PropTypes.node,
  value: PropTypes.string,
};

export default Icon;

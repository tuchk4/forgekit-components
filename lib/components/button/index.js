import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { ThemeProp } from 'forgekit';

import styles from './button.css';

const Button = ({
  children,
  disabled,
  className,
  theme,
  ...props
}) => {
  const classList = classnames(
    theme.base,
    theme.style,
    theme.animation,
    className, {
      [theme.disabled]: disabled,
    });

  return <button {...props} className={classList}>{children}</button>;
};


Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  theme: ThemeProp({
    base: PropTypes.string,
    style: PropTypes.string,
    animation: PropTypes.string,
    disabled: PropTypes.string,
  })
};

Button.defaultProps = {
  disabled: false,
  theme: {
    base: styles.base,
    animation: styles.animation,
  }
};

export default Button;

import React, { PropTypes } from 'react';
import classnames from 'classnames';
import styles from './button.css';
import { ThemeProp } from 'forgekit';

const Button = ({
  children,
  theme,
  className,
  ...props
}) => {
  const classList = classnames(theme.base, theme.style, className);
  return <button {...props} className={classList}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  theme: ThemeProp({
    base: PropTypes.string,
    style: PropTypes.string,
  }),
};

Button.defaultProps = {
  disabled: false,
  theme: {
    base: styles.base,
  },
};

export default Button;

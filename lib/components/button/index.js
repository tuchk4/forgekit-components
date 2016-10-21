import React, { PropTypes } from 'react';
import classnames from 'classnames';
import styles from './button.css';

const Button = ({
  children,
  className,
  ...props
}) => {
  const classList = classnames(className, styles.base);
  return <button className={classList} {...props}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;

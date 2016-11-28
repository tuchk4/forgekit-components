import { PropTypes } from 'react';
import { ThemeProp } from 'forgekit';
import classnames from 'classnames';

import styles from './highlite-flags.css';

const flagsFeature = ({
  danger,
  warning,
  success,
  disabled,
  className,
  theme,
  ...props
}) => {
  return {
    ...props,
    theme,
    className: classnames(className, {
      [theme.danger]: danger,
      [theme.warning]: warning,
      [theme.success]: success,
      [theme.disabled]: disabled,
    }),
  };
};

flagsFeature.propTypes = {
  danger: PropTypes.bool,
  warning: PropTypes.bool,
  success: PropTypes.bool,
  theme: ThemeProp({
    danger: PropTypes.string,
    warning: PropTypes.string,
    success: PropTypes.string,
    disabled: PropTypes.string,
  }),
};

flagsFeature.defaultProps = {
  danger: false,
  warning: false,
  success: false,
  disabled: false,
  theme: {
    danger: styles.danger,
    warning: styles.warning,
    success: styles.success,
    disabled: styles.disabled,
  },
};

export default flagsFeature;

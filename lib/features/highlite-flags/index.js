import { PropTypes } from 'react';
import classnames from 'classnames';

import styles from './highlite-flags.css';

const flagsFeature = ({
  alert,
  warning,
  className,
  ...props
}) => {
  if (alert && warning) {
    console.info('"alert" and "warning" flags should not be used at one time');
  }

  return {
    ...props,
    className: classnames(className, {
      [styles.alert]: alert,
      [styles.warning]: warning,
    }),
  };
};

flagsFeature.propTypes = {
  alert: PropTypes.bool,
  warning: PropTypes.bool,
  className: PropTypes.string,
};

flagsFeature.defaultProps = {
  alert: false,
  warning: false,
};

export default flagsFeature;

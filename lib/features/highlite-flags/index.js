import { PropTypes } from 'react';
import classnames from 'classnames';

import originalStyles from './highlite-flags.css';

const flagsFeatureWrapper = (customStyles, originalStyles) => {
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
        [customStyles.alert || originalStyles.alert]: alert,
        [customStyles.warning || originalStyles.warning]: warning,
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

  return flagsFeature;
};

export default flagsFeatureWrapper(originalStyles);
export const configure = customStyles => flagsFeatureWrapper(customStyles, originalStyles);

import { PropTypes } from 'react';
import classnames from 'classnames';

const postForge = ({
  theme,
  className,
  ...props
}) => {
  const classList = Object.values(theme);
  return {
    ...props,
    className: classnames(className, classList),
  };
};

export default (originalTheme) => {
  const themeFeature = ({
    theme,
    ...props
  }) => ({
    ...props,
    theme: {
      ...originalTheme,
      ...theme,
    },
  });

  themeFeature.postForge = postForge;
  themeFeature.propTypes = {
    theme: PropTypes.object,
  };

  return themeFeature;
};

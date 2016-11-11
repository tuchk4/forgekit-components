import React, { PropTypes } from 'react';

// NOTE: do something with importing from top level directories
import Icon from '../../../icon';

const renderIcon = (icon, className) => {
  if (!icon) {
    return null;
  }

  return <Icon key="icon" value={icon} className={className} />;
};

const iconFeature = ({
  icon,
  iconPosition,
  children,
  theme,
  ...props
}) => ({
  ...props,
  children: [
    iconPosition === 'left' ? renderIcon(icon, theme) : null,
    children,
    iconPosition === 'right' ? renderIcon(icon, theme) : null,
  ],
});

iconFeature.propTypes = {
  icon: PropTypes.string,
  iconPosition: PropTypes.string
};

iconFeature.defaultProps = {
  iconPosition: 'left',
};

export default iconFeature;

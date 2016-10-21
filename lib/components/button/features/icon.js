import React, { PropTypes } from 'react';

// NOTE: do something with importing from top level directories
import Icon from '../../icon';

const renderIcon = (icon) => {
  if (!icon) {
    return null;
  }

  return <Icon key="icon" value={icon} />;
};

const iconFeature = ({
  icon,
  iconPosition,
  children,
  ...props
}) => ({
  ...props,
  children: [
    iconPosition === 'left' ? renderIcon(icon) : null,
    children,
    iconPosition === 'right' ? renderIcon(icon) : null,
  ],
});

iconFeature.propTypes = {
  icon: PropTypes.string,
  iconPosition: PropTypes.string,
};

iconFeature.defaultProps = {
  iconPosition: 'left',
};

export default iconFeature;

import { PropTypes } from 'react';
import { ThemeProp } from 'forgekit';
import classnames from 'classnames';
import styles from './raised.css';

const materialize = ({
  raised,
  theme,
  className,
  ...props
}) => {
  return {
    className: classnames(className, {
      [theme.raised]: raised,
    }),
    theme,
    ...props,
  };
};

materialize.propTypes = {
  raised: PropTypes.bool,
  theme: ThemeProp({
    raised: PropTypes.string,
  }),
};

materialize.defaultProps = {
  raised: false,
  theme: {
    raised: styles.raised,
  },
};

export default materialize;

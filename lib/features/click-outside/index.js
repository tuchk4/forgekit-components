import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import DOMUtils from '../../utils/dom';

let isDocumentListenerExists = false;
const handlers = {};

const onDocumentClick = e => {
  for (const target of Object.keys(handlers)) {
    if (target === e.target && e.target === window ||
      (document.documentElement.contains(e.target) && !DOMUtils.isDescendant(target, e.target))) {

      handlers[target](e);
    }
  }
};

const handleClickOutside = (target, onClickOutside) => {
  handlers[target] = onClickOutside;

  if (!isDocumentListenerExists) {
    document.addEventListener('click', onDocumentClick, true);
    isDocumentListenerExists = true;
  }

  return () => {
    document.removeEventListener('click', onDocumentClick, true);
    if (!handlers.length) {
      isDocumentListenerExists = false;
    }
  };
};

class ClickOutside extends React.Component {
  disableClickOutside = null;

  componentDidMount() {
    handleClickOutside(findDOMNode(this), () => {
      this.disableClickOutside = this.props.onClickOutside();
    });
  }

  componentWillUnmount() {
    if (this.disableClickOutside) {
      this.this.disableClickOutside();
    }
  }

  render() {
    return this.props.children;
  }
};

const clickOutsideFeature =  {
  hoc: (Component) => {
    return ({
      onClickOutsideEnabled,
      onClickOutside,
      ...props
    }) => {
      if (!onClickOutside || !onClickOutsideEnabled) {
        return <Component {...props}/>;
      }

      return (
        <ClickOutside onClickOutside={onClickOutside}>
          <Component {...props} />
        </ClickOutside>
      );
    }
  }
};

clickOutsideFeature.propTypes = {
  onClickOutside: PropTypes.func,
  onClickOutsideEnabled: PropTypes.bool,
};

clickOutsideFeature.defaultProps = {
  onClickOutsideEnabled: true
};

export default clickOutsideFeature;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';

const classNames = require('classnames');

class Switch extends Component {
  constructor(props) {
    super(props);

    let checked = false;
    if ('checked' in props) {
      checked = !!props.checked;
    } else {
      checked = !!props.defaultChecked;
    }
    this.state = { checked };
  }

  componentDidMount() {
    const { autoFocus, disabled } = this.props;
    if (autoFocus && !disabled) {
      this.focus();
    }
  }

  static getDerivedStateFromProps(nextProps) {
    const newState = {};
    const { checked } = nextProps;

    if ('checked' in nextProps) {
      newState.checked = !!checked;
    }

    return newState;
  }

  setChecked(checked, e) {
    const { disabled, onChange } = this.props;
    if (disabled) {
      return;
    }
    if (!('checked' in this.props)) {
      this.setState({
        checked,
      });
    }
    if (onChange) {
      onChange(checked, e);
    }
  }

  handleClick = e => {
    const { checked } = this.state;
    const { onClick } = this.props;
    const newChecked = !checked;
    this.setChecked(newChecked, e);
    if (onClick) {
      onClick(newChecked, e);
    }
  };

  handleKeyDown = e => {
    if (e.keyCode === 37) {
      // Left
      this.setChecked(false, e);
    } else if (e.keyCode === 39) {
      // Right
      this.setChecked(true, e);
    }
  };

  // Handle auto focus when click switch in Chrome
  handleMouseUp = e => {
    const { onMouseUp } = this.props;
    if (this.node) {
      this.node.blur();
    }
    if (onMouseUp) {
      onMouseUp(e);
    }
  };

  saveNode = node => {
    this.node = node;
  };

  focus() {
    this.node.focus();
  }

  blur() {
    this.node.blur();
  }

  render() {
    const {
      className,
      prefixCls,
      disabled,
      loadingIcon,
      checkedChildren,
      unCheckedChildren,
      ...restProps
    } = this.props;
    const { checked } = this.state;
    const switchClassName = classNames({
      [className]: !!className,
      [prefixCls]: true,
      [`${prefixCls}-checked`]: checked,
      [`${prefixCls}-disabled`]: disabled,
    });
    return (
      <button
        {...restProps}
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        className={switchClassName}
        ref={this.saveNode}
        onKeyDown={this.handleKeyDown}
        onClick={this.handleClick}
        onMouseUp={this.handleMouseUp}
      >
        {loadingIcon}
        <span className={`${prefixCls}-inner`}>
          {checked ? checkedChildren : unCheckedChildren}
        </span>
      </button>
    );
  }
}

Switch.propTypes = {
  className: PropTypes.string,
  prefixCls: PropTypes.string,
  disabled: PropTypes.bool,
  checkedChildren: PropTypes.any,
  unCheckedChildren: PropTypes.any,
  onChange: PropTypes.func,
  onMouseUp: PropTypes.func,
  onClick: PropTypes.func,
  tabIndex: PropTypes.number,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  autoFocus: PropTypes.bool,
  loadingIcon: PropTypes.node,
};

Switch.defaultProps = {
  prefixCls: 'rc-switch',
  checkedChildren: null,
  unCheckedChildren: null,
  className: '',
  defaultChecked: false,
};

polyfill(Switch);

export default Switch;

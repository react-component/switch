import React, { Component } from 'react';
import PropTypes from 'prop-types';
const classNames = require('classnames');

function noop() {
}

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

  componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps) {
      this.setState({
        checked: !!nextProps.checked,
      });
    }
  }

  setChecked(checked) {
    if (!('checked' in this.props)) {
      this.setState({
        checked,
      });
    }
    this.props.onChange(checked);
  }

  toggle = () => {
    const { disabled, onClick } = this.props;
    const checked = !this.state.checked;
    if (!disabled) {
      this.setChecked(checked);
    }
    onClick(checked);
  }

  handleKeyDown = (e) => {
    if (e.keyCode === 37) {
      this.setChecked(false);
    }
    if (e.keyCode === 39) {
      this.setChecked(true);
    }
  }

  // Handle auto focus when click switch in Chrome
  handleMouseUp = (e) => {
    if (this.refs.node) {
      this.refs.node.blur();
    }
    if (this.props.onMouseUp) {
      this.props.onMouseUp(e);
    }
  }

  render() {
    const { className, prefixCls, disabled,
      checkedChildren, unCheckedChildren, ...restProps } = this.props;
    const checked = this.state.checked;
    const switchClassName = classNames({
      [className]: !!className,
      [prefixCls]: true,
      [`${prefixCls}-checked`]: checked,
      [`${prefixCls}-disabled`]: disabled,
    });
    return (
      <span
        {...restProps}
        className={switchClassName}
        tabIndex={disabled ? -1 : 0}
        ref="node"
        onKeyDown={this.handleKeyDown}
        onClick={this.toggle}
        onMouseUp={this.handleMouseUp}
      >
        <span className={`${prefixCls}-inner`}>
          {checked ? checkedChildren : unCheckedChildren}
        </span>
      </span>
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
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
};

Switch.defaultProps = {
  prefixCls: 'rc-switch',
  checkedChildren: null,
  unCheckedChildren: null,
  className: '',
  defaultChecked: false,
  onChange: noop,
  onClick: noop,
};

export default Switch;

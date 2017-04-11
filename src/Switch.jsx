const React = require('react');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');
const classNames = require('classnames');

function noop() {
}

const Switch = createReactClass({
  propTypes: {
    className: PropTypes.string,
    prefixCls: PropTypes.string,
    disabled: PropTypes.bool,
    checkedChildren: PropTypes.any,
    unCheckedChildren: PropTypes.any,
    onChange: PropTypes.func,
    onMouseUp: PropTypes.func,
  },
  getDefaultProps() {
    return {
      prefixCls: 'rc-switch',
      checkedChildren: null,
      unCheckedChildren: null,
      className: '',
      defaultChecked: false,
      onChange: noop,
    };
  },
  getInitialState() {
    const props = this.props;
    let checked = false;
    if ('checked' in props) {
      checked = !!props.checked;
    } else {
      checked = !!props.defaultChecked;
    }
    return {
      checked,
    };
  },
  componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps) {
      this.setState({
        checked: !!nextProps.checked,
      });
    }
  },
  setChecked(checked) {
    if (!('checked' in this.props)) {
      this.setState({
        checked,
      });
    }
    this.props.onChange(checked);
  },
  toggle() {
    const checked = !this.state.checked;
    this.setChecked(checked);
  },
  handleKeyDown(e) {
    if (e.keyCode === 37) {
      this.setChecked(false);
    }
    if (e.keyCode === 39) {
      this.setChecked(true);
    }
  },
  // Handle auto focus when click switch in Chrome
  handleMouseUp(e) {
    if (this.refs.node) {
      this.refs.node.blur();
    }
    if (this.props.onMouseUp) {
      this.props.onMouseUp(e);
    }
  },
  render() {
    const {className, prefixCls, disabled,
      checkedChildren, unCheckedChildren, ...restProps } = this.props;
    const checked = this.state.checked;
    const switchClassName = classNames({
      [className]: !!className,
      [prefixCls]: true,
      [`${prefixCls}-checked`]: checked,
      [`${prefixCls}-disabled`]: disabled,
    });
    return (
      <span {...restProps}
        className={switchClassName}
        tabIndex={disabled ? -1 : 0}
        ref="node"
        onKeyDown={this.handleKeyDown}
        onClick={disabled ? noop : this.toggle}
        onMouseUp={this.handleMouseUp}>
        <span className={`${prefixCls}-inner`}>
          {checked ? checkedChildren : unCheckedChildren}
        </span>
      </span>
    );
  },
});

module.exports = Switch;

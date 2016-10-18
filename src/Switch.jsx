const React = require('react');
const classNames = require('classnames');

function noop() {
}

const Switch = React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    prefixCls: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    checkedChildren: React.PropTypes.any,
    unCheckedChildren: React.PropTypes.any,
    onChange: React.PropTypes.func,
    onMouseUp: React.PropTypes.func,
    checked: React.PropTypes.oneOfType(React.PropTypes.bool),
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
    if (props.checked !== null && props.checked !== undefined) {
      checked = !!props.checked;
    } else {
      checked = !!props.defaultChecked;
    }
    return {
      checked,
    };
  },
  componentWillReceiveProps(nextProps) {
    if (nextProps.checked !== null && nextProps.checked !== undefined) {
      this.setState({
        checked: !!nextProps.checked,
      });
    }
  },
  setChecked(checked) {
    if (this.props.checked === null || this.props.checked === undefined) {
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
        tabIndex="0"
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

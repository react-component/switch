const React = require('react');
const classNames = require('classnames');

function noop() {
}

const Switch = React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    prefixCls: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    readOnly: React.PropTypes.bool,
    checkedChildren: React.PropTypes.any,
    unCheckedChildren: React.PropTypes.any,
    onChange: React.PropTypes.func,
    onMouseUp: React.PropTypes.func,
  },
  getDefaultProps() {
    return {
      prefixCls: 'rc-switch',
      checkedChildren: null,
      unCheckedChildren: null,
      className: '',
      readOnly: false,
      defaultChecked: false,
      onChange: noop,
    };
  },
  getInitialState() {
    const props = this.props;
    let checked = false;
    let readOnly = false;
    if ('checked' in props) {
      checked = !!props.checked;
    } else {
      checked = !!props.defaultChecked;
    }
    if ('readOnly' in props) {
      readOnly = !!props.readOnly;
    }
    return {
      checked: checked,
      readOnly: readOnly,
    };
  },
  componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps) {
      this.setState({
        checked: !!nextProps.checked,
      });
    }
    if ('readOnly' in nextProps) {
      this.setState({
        readOnly: !!nextProps.readOnly,
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
    const readOnly = this.state.readOnly;
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
        onKeyDown={disabled || readOnly ? noop : this.handleKeyDown}
        onClick={disabled || readOnly ? noop : this.toggle}
        onMouseUp={this.handleMouseUp}>
        <span className={`${prefixCls}-inner`}>
          {checked ? checkedChildren : unCheckedChildren}
        </span>
      </span>
    );
  },
});

module.exports = Switch;

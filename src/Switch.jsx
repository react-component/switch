const React = require('react');
const classNames = require('classnames');

function noop() {
}

const Switch = React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    prefixCls: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    style: React.PropTypes.object,
    checkedChildren: React.PropTypes.any,
    unCheckedChildren: React.PropTypes.any,
    onChange: React.PropTypes.func,
  },
  getDefaultProps() {
    return {
      prefixCls: 'rc-switch',
      style: {},
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
  toggle() {
    const checked = !this.state.checked;
    if (!('checked' in this.props)) {
      this.setState({
        checked,
      });
    }
    this.props.onChange(checked);
  },
  handleKeyDown(e) {
    if (e.keyCode === 37) {
      this.setState({
        checked: false,
      });
    }
    if (e.keyCode === 39) {
      this.setState({
        checked: true,
      });
    }
  },
  render() {
    const {className, prefixCls, disabled, style,
      checkedChildren, unCheckedChildren} = this.props;
    const checked = this.state.checked;
    const switchClassName = classNames({
      [className]: !!className,
      [prefixCls]: true,
      [`${prefixCls}-checked`]: checked,
      [`${prefixCls}-disabled`]: disabled,
    });
    return (<span className={switchClassName}
                  tabIndex="0"
                  onKeyDown={this.handleKeyDown}
                  onClick={disabled ? noop : this.toggle}
                  style={style}>
              <span className={`${prefixCls}-inner`}>
                {checked ? checkedChildren : unCheckedChildren}
              </span>
            </span>);
  },
});

module.exports = Switch;

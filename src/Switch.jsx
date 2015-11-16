const React = require('react');
const rcUtil = require('rc-util');

function noop() {
}

const Switch = React.createClass({
  propTypes: {
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
      checked: checked,
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
    this.setState({
      checked: checked,
    });
    this.props.onChange(checked);
  },
  render() {
    const props = this.props;
    const prefixCls = props.prefixCls;
    const classes = {
      [props.className]: !!props.className,
      [prefixCls]: 1,
      [`${prefixCls}-checked`]: this.state.checked,
      [`${prefixCls}-disabled`]: props.disabled,
    };
    return (<span className={rcUtil.classSet(classes)}
                  onClick={props.disabled ? noop : this.toggle}
                  style={props.style}>
    <span className={`${prefixCls}-inner`}>{this.state.checked ?
      props.checkedChildren :
      props.unCheckedChildren}</span>
  </span>);
  },
});

module.exports = Switch;

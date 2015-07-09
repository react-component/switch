'use strict';

var React = require('react');
var rcUtil = require('rc-util');

function noop() {
}

var Switch = React.createClass({
    getInitialState() {
      var props = this.props;
      var checked = false;
      if ('checked' in props) {
        checked = !!props.checked;
      } else {
        checked = !!props.defaultChecked;
      }
      return {
        checked: checked
      };
    },
    getDefaultProps() {
      return {
        prefixCls: 'rc-switch',
        style: {},
        checkedChildren: null,
        unCheckedChildren: null,
        className: '',
        defaultChecked: false,
        onChange: noop
      };
    },
    componentWillReceiveProps(nextProps) {
      if ('checked' in nextProps) {
        this.setState({
          checked: !!nextProps.checked
        });
      }
    },
    render() {
      var props = this.props;
      var prefixCls = props.prefixCls;
      return (
        <span className={rcUtil.classSet({
          [props.className]: !!props.className,
          [prefixCls]: 1,
          [`${prefixCls}-checked`]: this.state.checked,
          [`${prefixCls}-disabled`]: props.disabled
        })}
          onClick = {props.disabled ? noop : this.toggle}
          style={props.style}
        >
          <span className={`${prefixCls}-inner`}>{this.state.checked ?
            props.checkedChildren :
            props.unCheckedChildren}</span>
        </span>
      );
    },
    toggle() {
      var checked = !this.state.checked;
      this.setState({
        checked: checked
      });
      this.props.onChange(checked);
    }
  }
);

module.exports = Switch;

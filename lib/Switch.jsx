/** @jsx React.DOM */
var React = require('react');
var rcUtil = require('rc-util');

var Switch = React.createClass({
    getInitialState() {
      var props = this.props;
      var checked = false;
      if ('checked' in props) {
        checked = !!this.props.checked;
      } else {
        checked = !!this.props.defaultChecked;
      }
      return {
        checked: checked
      };
    },
    getDefaultProps() {
      return {
        onChange() {
        }
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
      return (
        <span className={rcUtil.classSet({
          "rc-switch": 1,
          "rc-switch-checked": this.state.checked,
          "rc-switch-disabled": this.props.disabled
        })}
          onClick = {this.toggleEvent}
        > </span>
      );
    },
    toggleEvent() {
      if (this.props.disabled) {
        return;
      }
      var self = this;
      this.setState({
        checked: !this.state.checked
      }, function () {
        self.props.onChange(self.state.checked);
      });
    }
  }
);
module.exports = Switch;

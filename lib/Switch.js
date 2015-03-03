/** @jsx React.DOM */
var React = require('react');
var rcUtil = require('rc-util');

var Switch = React.createClass(
    {
        getInitialState: function () {
            return {
                'checked': !!this.props.checked,
                'disabled': !!this.props.disabled
            };
        },
        getDefaultProps: function () {
            return {
                onChange: function () {
                }
            };
        },
        render: function () {
            return (
                <span className={rcUtil.classSet({
                    "rc-switch": 1,
                    "rc-switch-checked": this.state.checked,
                    "rc-switch-disabled": this.state.disabled
                })}
                    onClick = {this.toggleEvent}
                > </span>
            )
        },
        toggleEvent: function () {
            if (this.state.disabled) {
                return;
            }
            var self = this;
            this.setState({
                'checked': !this.state.checked
            }, function () {
                self.props.onChange(self.state.checked);
            });
        }
    }
);
module.exports = Switch;

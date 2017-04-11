require('../assets/index.less');
const React = require('react');
const ReactDOM = require('react-dom');
const Switch = require('rc-switch');

function onChange(value) {
  console.log('switch checked:' + value);
}


const Test = React.createClass({
  getInitialState() {
    return {
      disabled: false,
      readonly: false,
    };
  },
  toggle() {
    this.setState({
      disabled: !this.state.disabled,
    });
  },
  readonly() {
    this.setState({
      readonly: !this.state.readonly,
    });
  },
  render() {
    return (<div style={{margin: 20}}>
      <Switch onChange={onChange}
        disabled={this.state.disabled}
        readOnly={this.state.readonly}
        checkedChildren={'开'}
        unCheckedChildren={'关'}
      />
      <div>
        <button onClick={this.toggle}>toggle disabled</button>
      </div>
      <div>
        <button onClick={this.readonly}>readonly enabled</button>
      </div>
    </div>);
  },
});

ReactDOM.render(<Test />, document.getElementById('__react-content'));

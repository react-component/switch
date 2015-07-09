require('../assets/index.css');
var React = require('react');
var Switch = require('rc-switch');

function onChange(value) {
  console.log('switch checked:' + value);
}


var Test = React.createClass({
  render() {
    return <div style={{margin: 20}}>
      <Switch onChange={onChange}
        checkedChildren={'开'}
        unCheckedChildren={'关'}
      />
    </div>;
  }
});

React.render(<Test />, document.getElementById("__react-content"));

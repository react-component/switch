require('../assets/index.css');
var React = require('react');
var Switch = require('rc-switch');
onChange = function(value){
    console.log(value);
}
React.render(
    <Switch onChange={onChange}></Switch>, document.getElementById("__react-content"));
var expect = require('expect.js');
var Switch = require('../index');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var Simulate = TestUtils.Simulate;

describe('rc-switch',function(){
  var switcher;
  var container = document.createElement('div');
  document.body.appendChild(container);

  beforeEach(function (done) {
    ReactDOM.render(<Switch/>, container, function () {
      switcher = this;
      done();
    });
  });

  afterEach(function () {
    ReactDOM.unmountComponentAtNode(container);
  });

  it('works',function(){
    expect(switcher.state.checked).to.be(false);
    Simulate.click(ReactDOM.findDOMNode(switcher));
    expect(switcher.state.checked).to.be(true);
  });
});

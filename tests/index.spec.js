/**
 * only require other specs here
 */
var expect = require('expect.js');
var Switch = require('../index');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Simulate = TestUtils.Simulate;

describe('rc-switch',function(){
  var switcher;
  var container = document.createElement('div');
  document.body.appendChild(container);

  beforeEach(function (done) {
    React.render(<Switch/>, container, function () {
      switcher = this;
      done();
    });
  });

  afterEach(function () {
    React.unmountComponentAtNode(container);
  });

  it('works',function(){
    expect(switcher.state.checked).to.be(false);
    Simulate.click(React.findDOMNode(switcher));
    expect(switcher.state.checked).to.be(true);
  });
});

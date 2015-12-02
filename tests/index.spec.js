/**
 * only require other specs here
 */
const expect = require('expect.js');
const Switch = require('../index');
const React = require('react/addons');
const TestUtils = React.addons.TestUtils;
const Simulate = TestUtils.Simulate;

describe('rc-switch', () => {
  let switcher;
  const container = document.createElement('div');
  document.body.appendChild(container);

  beforeEach((done) => {
    React.render(<Switch />, container, function() {
      switcher = this;
      done();
    });
  });

  afterEach(() => {
    React.unmountComponentAtNode(container);
  });

  it('works', () =>{
    expect(switcher.state.checked).to.be(false);
    Simulate.click(React.findDOMNode(switcher));
    expect(switcher.state.checked).to.be(true);
  });
});

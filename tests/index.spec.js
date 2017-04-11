/**
 * only require other specs here
 */
const expect = require('expect.js');
const Switch = require('../index');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-dom/test-utils');
const Simulate = TestUtils.Simulate;

describe('rc-switch', () => {
  let switcher;
  const container = document.createElement('div');
  document.body.appendChild(container);

  beforeEach((done) => {
    ReactDOM.render(<Switch />, container, function init() {
      switcher = this;
      done();
    });
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
  });

  it('works', () =>{
    expect(switcher.state.checked).to.be(false);
    Simulate.click(ReactDOM.findDOMNode(switcher));
    expect(switcher.state.checked).to.be(true);
  });
});

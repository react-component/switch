/**
 * only require other specs here
 */
const expect = require('expect.js');
const Switch = require('../index');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const Simulate = TestUtils.Simulate;

describe('rc-switch', () => {
  let switcher;
  const container = document.createElement('div');
  document.body.appendChild(container);

  function createComponent(props) {
    ReactDOM.render(<Switch disabled={props.disabled} readOnly={props.readOnly} />, container, function init() {
      switcher = this;
    });
  }

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
  });

  it('works', () =>{
    createComponent({});
    expect(switcher.state.checked).to.be(false);
    Simulate.click(React.findDOMNode(switcher));
    expect(switcher.state.checked).to.be(true);
  });

  it('is readonly', () =>{
    createComponent({readOnly: true});
    expect(switcher.state.checked).to.be(false);
    Simulate.click(React.findDOMNode(switcher));
    expect(switcher.state.checked).to.be(false);
  });

  it('is disabled', () =>{
    createComponent({disabled: true});
    expect(switcher.state.checked).to.be(false);
    Simulate.click(React.findDOMNode(switcher));
    expect(switcher.state.checked).to.be(false);
  });
});

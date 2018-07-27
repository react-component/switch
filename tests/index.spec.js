/* eslint-disable no-undef */
import Switch from '../index';
import React from 'react';
import { mount } from 'enzyme';

describe('rc-switch', () => {
  let switcher;
  beforeEach(() => {
    switcher = mount(<Switch />);
  });

  it('works', () => {
    expect(switcher.state().checked).toBe(false);
    switcher.simulate('click');
    expect(switcher.state().checked).toBe(true);
  });

  it('should be checked upon right key and unchecked on left key', () => {
    expect(switcher.state().checked).toBe(false);
    switcher.simulate('keydown', { keyCode: 39 });
    expect(switcher.state().checked).toBe(true);
    switcher.simulate('keydown', { keyCode: 37 });
    expect(switcher.state().checked).toBe(false);
  });

  it('should toggle upon space and enter key', () => {
    expect(switcher.state().checked).toBe(false);
    switcher.simulate('keydown', { keyCode: 32 });
    expect(switcher.state().checked).toBe(true);
    switcher.simulate('keydown', { keyCode: 13 });
    expect(switcher.state().checked).toBe(false);
  });

  it('should change from an initial checked state of true to false on click', () => {
    const wrapper = mount(<Switch defaultChecked/>);
    expect(wrapper.state().checked).toBe(true);
    wrapper.simulate('click');
    expect(wrapper.state().checked).toBe(false);
  });

  it('should support onClick', () => {
    const onClick = jest.fn();
    const wrapper = mount(<Switch onClick={onClick} />);
    wrapper.simulate('click');
    expect(onClick).toBeCalledWith(true);
    expect(onClick.mock.calls.length).toBe(1);
    wrapper.simulate('click');
    expect(onClick).toBeCalledWith(false);
    expect(onClick.mock.calls.length).toBe(2);
  });

  it('should not toggle when clicked in a disabled state', () => {
    const onChange = jest.fn();
    const wrapper = mount(<Switch disabled checked onChange={onChange}/>);
    expect(wrapper.state().checked).toBe(true);
    wrapper.simulate('click');
    expect(wrapper.state().checked).toBe(true);
    expect(onChange.mock.calls.length).toBe(0);
  });

  it('should support extra node', () => {
    const wrapper = mount(<Switch extra={<span className="extra">extra-node</span>}/>);
    expect(wrapper.find('.extra').text()).toBe('extra-node');
  });

  it('focus()', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const handleFocus = jest.fn();
    const wrapper = mount(<Switch onFocus={handleFocus} />, { attachTo: container });
    wrapper.instance().focus();
    expect(handleFocus).toBeCalled();
  });

  it('blur()', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const handleBlur = jest.fn();
    const wrapper = mount(<Switch onBlur={handleBlur} />, { attachTo: container });
    wrapper.instance().focus();
    wrapper.instance().blur();
    expect(handleBlur).toBeCalled();
  });

  it('autoFocus', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const handleFocus = jest.fn();
    mount(<Switch autoFocus onFocus={handleFocus} />, { attachTo: container });
    expect(handleFocus).toBeCalled();
  });
});

import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { mount } from 'enzyme';
import Switch from '../index';

describe('rc-switch', () => {
  function createSwitch(props = {}) {
    return mount(
      <Switch
        checkedChildren={<span className="checked" />}
        unCheckedChildren={<span className="unchecked" />}
        {...props}
      />,
    );
  }

  it('works', () => {
    const wrapper = createSwitch();
    expect(wrapper.exists('.unchecked')).toBeTruthy();
    wrapper.simulate('click');
    expect(wrapper.exists('.checked')).toBeTruthy();
  });

  it('should be checked upon right key and unchecked on left key', () => {
    const wrapper = createSwitch();
    expect(wrapper.exists('.unchecked')).toBeTruthy();
    wrapper.simulate('keydown', { keyCode: 39 });
    expect(wrapper.exists('.checked')).toBeTruthy();
    wrapper.simulate('keydown', { keyCode: 37 });
    expect(wrapper.exists('.unchecked')).toBeTruthy();
  });

  it('should change from an initial checked state of true to false on click', () => {
    const onChange = jest.fn();
    const wrapper = createSwitch({ defaultChecked: true, onChange });
    expect(wrapper.exists('.checked')).toBeTruthy();
    wrapper.simulate('click');
    expect(wrapper.exists('.unchecked')).toBeTruthy();
    expect(onChange.mock.calls.length).toBe(1);
  });

  it('should support onClick', () => {
    const onClick = jest.fn();
    const wrapper = createSwitch({ onClick });
    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalledWith(true, expect.objectContaining({ type: 'click' }));
    expect(onClick.mock.calls.length).toBe(1);
    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalledWith(false, expect.objectContaining({ type: 'click' }));
    expect(onClick.mock.calls.length).toBe(2);
  });

  it('should not toggle when clicked in a disabled state', () => {
    const onChange = jest.fn();
    const wrapper = createSwitch({ disabled: true, checked: true, onChange });
    expect(wrapper.exists('.checked')).toBeTruthy();
    wrapper.simulate('click');
    expect(wrapper.exists('.checked')).toBeTruthy();
    expect(onChange.mock.calls.length).toBe(0);
  });

  it('should support loading icon node', () => {
    const wrapper = mount(<Switch loadingIcon={<span className="extra">loading</span>} />);
    expect(wrapper.find('.extra').text()).toBe('loading');
  });

  it('focus()', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const handleFocus = jest.fn();
    const ref = React.createRef();
    mount(<Switch ref={ref} onFocus={handleFocus} />, {
      attachTo: container,
    });
    ref.current.focus();
    expect(handleFocus).toHaveBeenCalled();
  });

  it('blur()', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const handleBlur = jest.fn();
    const ref = React.createRef();
    mount(<Switch ref={ref} onBlur={handleBlur} />, {
      attachTo: container,
    });
    ref.current.focus();
    ref.current.blur();
    expect(handleBlur).toHaveBeenCalled();
  });

  it('autoFocus', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const handleFocus = jest.fn();
    const wrapper = mount(<Switch autoFocus onFocus={handleFocus} />, { attachTo: container });
    expect(handleFocus).toHaveBeenCalled();
  });

  it('disabled', () => {
    const wrapper = createSwitch({ disabled: true });
    expect(wrapper.exists('.unchecked')).toBeTruthy();
    wrapper.simulate('keydown', { keyCode: 39 });
    expect(wrapper.exists('.unchecked')).toBeTruthy();
    wrapper.simulate('mouseup');
  });
});

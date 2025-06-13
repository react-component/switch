import React from 'react';
import KeyCode from '@rc-component/util/lib/KeyCode';
import { mount } from 'enzyme';
import Switch from '..';

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
    wrapper.simulate('keydown', { which: KeyCode.RIGHT });
    expect(wrapper.exists('.checked')).toBeTruthy();
    wrapper.simulate('keydown', { which: KeyCode.LEFT });
    expect(wrapper.exists('.unchecked')).toBeTruthy();
  });

  it('should change from an initial checked state of true to false on click', () => {
    const onChange = jest.fn();
    const wrapper = createSwitch({ defaultChecked: true, onChange });
    expect(wrapper.exists('.checked')).toBeTruthy();
    wrapper.find('.rc-switch').simulate('click');
    expect(wrapper.exists('.unchecked')).toBeTruthy();
    expect(onChange.mock.calls.length).toBe(1);
  });

  it('should support onClick', () => {
    const onClick = jest.fn();
    const wrapper = createSwitch({ onClick });
    wrapper.find('.rc-switch').simulate('click');
    expect(onClick).toHaveBeenCalledWith(true, expect.objectContaining({ type: 'click' }));
    expect(onClick.mock.calls.length).toBe(1);
    wrapper.find('.rc-switch').simulate('click');
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

  describe('autoFocus', () => {
    it('basic', () => {
      const container = document.createElement('div');
      document.body.appendChild(container);
      const handleFocus = jest.fn();
      mount(<Switch autoFocus onFocus={handleFocus} />, { attachTo: container });
      expect(handleFocus).toHaveBeenCalled();
    });

    it('not work when disabled', () => {
      const container = document.createElement('div');
      document.body.appendChild(container);
      const handleFocus = jest.fn();
      mount(<Switch autoFocus disabled onFocus={handleFocus} />, { attachTo: container });
      expect(handleFocus).not.toHaveBeenCalled();
    });
  });

  it('disabled', () => {
    const wrapper = createSwitch({ disabled: true });
    expect(wrapper.exists('.unchecked')).toBeTruthy();
    wrapper.simulate('keydown', { keyCode: 39 });
    expect(wrapper.exists('.unchecked')).toBeTruthy();
  });

  it('onMouseUp', () => {
    const onMouseUp = jest.fn();
    const wrapper = createSwitch({ onMouseUp });
    wrapper.find('.rc-switch').simulate('mouseup');
    expect(onMouseUp).toHaveBeenCalled();
  });

  it('disabled should click not to change', () => {
    const onChange = jest.fn();
    const onClick = jest.fn();
    const wrapper = createSwitch({ disabled: true, onChange, onClick, checked: true });

    wrapper.simulate('click');
    expect(onChange).not.toHaveBeenCalled();
  });
  it('support classnames and styles', () => {
    const wrapper = createSwitch({
      classNames: { content: 'custom-content' },
      styles: { content: { background: 'red' } },
    });
    const contentElement = wrapper.find('.custom-content').at(0);
    expect(contentElement.exists()).toBe(true);
    expect(contentElement.prop('style')).toEqual({ background: 'red' });
  });
});

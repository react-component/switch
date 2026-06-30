import React from 'react';
import { KeyCode } from '@rc-component/util';
import { fireEvent, render } from '@testing-library/react';
import Switch from '..';

describe('rc-switch', () => {
  function keyDownWithWhich(target, which) {
    fireEvent.keyDown(target, { keyCode: which });
  }

  function createSwitch(props = {}) {
    return render(
      <Switch
        checkedChildren={<span className="checked" />}
        unCheckedChildren={<span className="unchecked" />}
        {...props}
      />,
    );
  }

  it('works', () => {
    const { getByRole } = createSwitch();
    const switchNode = getByRole('switch');

    expect(switchNode.getAttribute('aria-checked')).toBe('false');
    fireEvent.click(switchNode);
    expect(switchNode.getAttribute('aria-checked')).toBe('true');
  });

  it('should be checked upon right key and unchecked on left key', () => {
    const { getByRole } = createSwitch();
    const switchNode = getByRole('switch');

    expect(switchNode.getAttribute('aria-checked')).toBe('false');
    keyDownWithWhich(switchNode, KeyCode.RIGHT);
    expect(switchNode.getAttribute('aria-checked')).toBe('true');
    keyDownWithWhich(switchNode, KeyCode.LEFT);
    expect(switchNode.getAttribute('aria-checked')).toBe('false');
  });

  it('should change from an initial checked state of true to false on click', () => {
    const onChange = jest.fn();
    const { getByRole } = createSwitch({ defaultChecked: true, onChange });
    const switchNode = getByRole('switch');

    expect(switchNode.getAttribute('aria-checked')).toBe('true');
    fireEvent.click(switchNode);
    expect(switchNode.getAttribute('aria-checked')).toBe('false');
    expect(onChange.mock.calls.length).toBe(1);
  });

  it('should support onClick', () => {
    const onClick = jest.fn();
    const { getByRole } = createSwitch({ onClick });
    const switchNode = getByRole('switch');

    fireEvent.click(switchNode);
    expect(onClick).toHaveBeenCalledWith(true, expect.objectContaining({ type: 'click' }));
    expect(onClick.mock.calls.length).toBe(1);
    fireEvent.click(switchNode);
    expect(onClick).toHaveBeenCalledWith(false, expect.objectContaining({ type: 'click' }));
    expect(onClick.mock.calls.length).toBe(2);
  });

  it('should not toggle when clicked in a disabled state', () => {
    const onChange = jest.fn();
    const { getByRole } = createSwitch({ disabled: true, checked: true, onChange });
    const switchNode = getByRole('switch');

    expect(switchNode.getAttribute('aria-checked')).toBe('true');
    fireEvent.click(switchNode);
    expect(switchNode.getAttribute('aria-checked')).toBe('true');
    expect(onChange.mock.calls.length).toBe(0);
  });

  it('should support loading icon node', () => {
    const { container } = render(<Switch loadingIcon={<span className="extra">loading</span>} />);
    expect(container.querySelector('.extra').textContent).toBe('loading');
  });

  it('focus()', () => {
    const handleFocus = jest.fn();
    const ref = React.createRef();
    render(<Switch ref={ref} onFocus={handleFocus} />);

    ref.current.focus();
    expect(document.activeElement).toBe(ref.current);
    fireEvent.focus(ref.current);
    expect(handleFocus).toHaveBeenCalled();
  });

  it('blur()', () => {
    const handleBlur = jest.fn();
    const ref = React.createRef();
    render(<Switch ref={ref} onBlur={handleBlur} />);

    ref.current.focus();
    expect(document.activeElement).toBe(ref.current);
    ref.current.blur();
    expect(document.activeElement).not.toBe(ref.current);
    fireEvent.blur(ref.current);
    expect(handleBlur).toHaveBeenCalled();
  });

  describe('autoFocus', () => {
    it('basic', () => {
      const handleFocus = jest.fn();
      const { getByRole } = render(<Switch autoFocus onFocus={handleFocus} />);
      const switchNode = getByRole('switch');

      expect(document.activeElement).toBe(switchNode);
      fireEvent.focus(switchNode);
      expect(handleFocus).toHaveBeenCalled();
    });

    it('not work when disabled', () => {
      const handleFocus = jest.fn();
      render(<Switch autoFocus disabled onFocus={handleFocus} />);
      expect(handleFocus).not.toHaveBeenCalled();
    });
  });

  it('disabled', () => {
    const { getByRole } = createSwitch({ disabled: true });
    const switchNode = getByRole('switch');

    expect(switchNode.getAttribute('aria-checked')).toBe('false');
    keyDownWithWhich(switchNode, KeyCode.RIGHT);
    expect(switchNode.getAttribute('aria-checked')).toBe('false');
  });

  it('onMouseUp', () => {
    const onMouseUp = jest.fn();
    const { getByRole } = createSwitch({ onMouseUp });

    fireEvent.mouseUp(getByRole('switch'));
    expect(onMouseUp).toHaveBeenCalled();
  });

  it('disabled should click not to change', () => {
    const onChange = jest.fn();
    const onClick = jest.fn();
    const { getByRole } = createSwitch({ disabled: true, onChange, onClick, checked: true });

    fireEvent.click(getByRole('switch'));
    expect(onChange).not.toHaveBeenCalled();
  });
  it('support classnames and styles', () => {
    const { container } = createSwitch({
      classNames: { content: 'custom-content' },
      styles: { content: { background: 'red' } },
    });
    const contentElement = container.querySelector('.custom-content');

    expect(contentElement).toBeTruthy();
    expect(contentElement.style.background).toBe('red');
  });
});

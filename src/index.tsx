import * as React from 'react';
import classNames from 'classnames';

export type SwitchChangeEventHandler = (checked: boolean, event: MouseEvent) => void;
export type SwitchClickEventHandler = SwitchChangeEventHandler;

interface SwitchProps {
  className?: string;
  prefixCls?: string;
  disabled?: boolean;
  checkedChildren?: React.ReactNode;
  unCheckedChildren?: React.ReactNode;
  onChange?: SwitchChangeEventHandler;
  onMouseUp: React.MouseEventHandler<HTMLButtonElement>;
  onClick?: SwitchClickEventHandler;
  tabIndex?: number;
  checked?: boolean;
  defaultChecked?: boolean;
  autoFocus?: boolean;
  loadingIcon: React.ReactNode;
  style?: React.CSSProperties;
  title?: string;
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>((props, ref) => {
  const mergedRef = (ref as any) || React.createRef<HTMLButtonElement>();

  let initChecked = false;
  if ('checked' in props) {
    console.log('object');
    initChecked = !!props.checked;
  } else {
    initChecked = !!props.defaultChecked;
  }
  const [checked, setChecked] = React.useState(initChecked);

  React.useEffect(() => {
    const { autoFocus, disabled } = props;
    if (autoFocus && !disabled) {
      focus();
    }
  }, [props.autoFocus, props.disabled]);

  React.useEffect(() => {
    if ('checked' in props) {
      setChecked(!!props.checked);
    }
  }, [props.checked]);

  const setInternalChecked = (checked, e) => {
    const { disabled, onChange } = props;
    if (disabled) {
      return;
    }
    if (!('checked' in props)) {
      setChecked(checked);
    }
    if (onChange) {
      onChange(checked, e);
    }
  };

  const handleClick = e => {
    const { onClick } = props;
    const newChecked = !checked;
    setInternalChecked(newChecked, e);
    if (onClick) {
      onClick(newChecked, e);
    }
  };

  const handleKeyDown = e => {
    if (e.keyCode === 37) {
      // Left
      setInternalChecked(false, e);
    } else if (e.keyCode === 39) {
      // Right
      setInternalChecked(true, e);
    }
  };

  // Handle auto focus when click switch in Chrome
  const handleMouseUp = e => {
    (mergedRef.current as any).blur();
    if (props.onMouseUp) {
      props.onMouseUp(e);
    }
  };

  const {
    className,
    prefixCls,
    disabled,
    loadingIcon,
    checkedChildren,
    unCheckedChildren,
    onChange,
    ...restProps
  } = props;

  const switchClassName = classNames({
    [className]: !!className,
    [prefixCls]: true,
    [`${prefixCls}-checked`]: checked,
    [`${prefixCls}-disabled`]: disabled,
  });

  return (
    <button
      {...restProps}
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      className={switchClassName}
      ref={mergedRef}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      onMouseUp={handleMouseUp}
    >
      {loadingIcon}
      <span className={`${prefixCls}-inner`}>{checked ? checkedChildren : unCheckedChildren}</span>
    </button>
  );
});

Switch.displayName = 'Switch';

Switch.defaultProps = {
  prefixCls: 'rc-switch',
  checkedChildren: null,
  unCheckedChildren: null,
  className: '',
  defaultChecked: false,
};

export default Switch;

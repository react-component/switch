import * as React from 'react';
import classNames from 'classnames';
import useMergedState from '@rc-component/util/lib/hooks/useMergedState';
import KeyCode from '@rc-component/util/lib/KeyCode';

export type SwitchChangeEventHandler = (
  checked: boolean,
  event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>,
) => void;
export type SwitchClickEventHandler = SwitchChangeEventHandler;

interface SwitchProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onChange' | 'onClick'> {
  className?: string;
  prefixCls?: string;
  disabled?: boolean;
  checkedChildren?: React.ReactNode;
  unCheckedChildren?: React.ReactNode;
  onChange?: SwitchChangeEventHandler;
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
  onClick?: SwitchClickEventHandler;
  tabIndex?: number;
  checked?: boolean;
  defaultChecked?: boolean;
  loadingIcon?: React.ReactNode;
  style?: React.CSSProperties;
  title?: string;
  styles?: { content: React.CSSProperties };
  classNames?: { content: string };
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      prefixCls = 'rc-switch',
      className,
      checked,
      defaultChecked,
      disabled,
      loadingIcon,
      checkedChildren,
      unCheckedChildren,
      onClick,
      onChange,
      onKeyDown,
      styles,
      classNames: switchClassNames,
      ...restProps
    },
    ref,
  ) => {
    const [innerChecked, setInnerChecked] = useMergedState<boolean>(false, {
      value: checked,
      defaultValue: defaultChecked,
    });

    function triggerChange(
      newChecked: boolean,
      event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>,
    ) {
      let mergedChecked = innerChecked;

      if (!disabled) {
        mergedChecked = newChecked;
        setInnerChecked(mergedChecked);
        onChange?.(mergedChecked, event);
      }

      return mergedChecked;
    }

    function onInternalKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
      if (e.which === KeyCode.LEFT) {
        triggerChange(false, e);
      } else if (e.which === KeyCode.RIGHT) {
        triggerChange(true, e);
      }
      onKeyDown?.(e);
    }

    function onInternalClick(e: React.MouseEvent<HTMLButtonElement>) {
      const ret = triggerChange(!innerChecked, e);
      // [Legacy] trigger onClick with value
      onClick?.(ret, e);
    }

    const switchClassName = classNames(prefixCls, className, {
      [`${prefixCls}-checked`]: innerChecked,
      [`${prefixCls}-disabled`]: disabled,
    });

    return (
      <span className={`${prefixCls}-wrapper`}>
        <button
          {...restProps}
          type="button"
          role="switch"
          aria-checked={innerChecked}
          disabled={disabled}
          className={switchClassName}
          ref={ref}
          onKeyDown={onInternalKeyDown}
          onClick={onInternalClick}
        >
          {loadingIcon}
          <span className={`${prefixCls}-inner`}>
            <span
              className={classNames(`${prefixCls}-inner-checked`, switchClassNames?.content)}
              style={styles?.content}
            >
              {checkedChildren}
            </span>
            <span
              className={classNames(`${prefixCls}-inner-unchecked`, switchClassNames?.content)}
              style={styles?.content}
            >
              {unCheckedChildren}
            </span>
          </span>
        </button>
      </span>
    );
  },
);

Switch.displayName = 'Switch';

export default Switch;

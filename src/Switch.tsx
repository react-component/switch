import React, { Component, MouseEventHandler } from 'react';
import { polyfill } from 'react-lifecycles-compat';
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
  onMouseUp: MouseEventHandler<HTMLButtonElement>;
  onClick?: SwitchClickEventHandler;
  tabIndex?: number;
  checked?: boolean;
  defaultChecked?: boolean;
  autoFocus?: boolean;
  loadingIcon: React.ReactNode;
  style?: React.CSSProperties;
  title?: string;
}

interface SwitchState {
  checked: boolean;
}

class Switch extends Component<SwitchProps, SwitchState> {
  private node: React.RefObject<HTMLButtonElement>;

  static defaultProps = {
    prefixCls: 'rc-switch',
    checkedChildren: null,
    unCheckedChildren: null,
    className: '',
    defaultChecked: false,
  };

  constructor(props) {
    super(props);
    let checked = false;
    if ('checked' in props) {
      checked = !!props.checked;
    } else {
      checked = !!props.defaultChecked;
    }
    this.state = { checked };
    this.node = React.createRef();
  }

  componentDidMount() {
    const { autoFocus, disabled } = this.props;
    if (autoFocus && !disabled) {
      this.focus();
    }
  }

  static getDerivedStateFromProps(nextProps) {
    const { checked } = nextProps;
    const newState: Partial<SwitchState> = {};
    if ('checked' in nextProps) {
      newState.checked = !!checked;
    }
    return newState;
  }

  setChecked(checked, e) {
    const { disabled, onChange } = this.props;
    if (disabled) {
      return;
    }
    if (!('checked' in this.props)) {
      this.setState({
        checked,
      });
    }
    if (onChange) {
      onChange(checked, e);
    }
  }

  handleClick = e => {
    const { checked } = this.state;
    const { onClick } = this.props;
    const newChecked = !checked;
    this.setChecked(newChecked, e);
    if (onClick) {
      onClick(newChecked, e);
    }
  };

  handleKeyDown = e => {
    if (e.keyCode === 37) {
      // Left
      this.setChecked(false, e);
    } else if (e.keyCode === 39) {
      // Right
      this.setChecked(true, e);
    }
  };

  // Handle auto focus when click switch in Chrome
  handleMouseUp = e => {
    const { onMouseUp } = this.props;
    this.blur();
    if (onMouseUp) {
      onMouseUp(e);
    }
  };

  focus() {
    if (this.node.current) {
      this.node.current.focus();
    }
  }

  blur() {
    if (this.node.current) {
      this.node.current.blur();
    }
  }

  render() {
    const {
      className,
      prefixCls,
      disabled,
      loadingIcon,
      checkedChildren,
      unCheckedChildren,
      onChange,
      ...restProps
    } = this.props;
    const { checked } = this.state;
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
        ref={this.node}
        onKeyDown={this.handleKeyDown}
        onClick={this.handleClick}
        onMouseUp={this.handleMouseUp}
      >
        {loadingIcon}
        <span className={`${prefixCls}-inner`}>
          {checked ? checkedChildren : unCheckedChildren}
        </span>
      </button>
    );
  }
}

polyfill(Switch);

export default Switch;

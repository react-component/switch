import '../../assets/index.less';
import React, { useState } from 'react';
import type { SwitchChangeEventHandler } from '@rc-component/switch';
import Switch from '@rc-component/switch';

const onChange: SwitchChangeEventHandler = (value, event) => {
  // eslint-disable-next-line no-console
  console.log(`switch checked: ${value}`, event);
};

export default () => {
  const [disabled, setDisabled] = useState(false);

  const toggle = () => {
    setDisabled((prev) => !prev);
  };

  return (
    <div style={{ margin: 20 }}>
      <Switch onChange={onChange} disabled={disabled} checkedChildren="开" unCheckedChildren="关" />
      <div style={{ marginTop: 20 }}>
        <button type="button" onClick={toggle}>
          toggle disabled
        </button>
      </div>
    </div>
  );
};

import '../assets/index.less';
import React from 'react';
import Switch from '../src/index';

function onChange(value, event) {
  // eslint-disable-next-line no-console
  console.log(`switch checked: ${value}`, event);
}

export default class Simple extends React.Component {
  state = {
    disabled: false,
  };

  toggle = () => {
    const { disabled } = this.state;
    this.setState({
      disabled: !disabled,
    });
  };

  render() {
    const { disabled } = this.state;
    return (
      <div style={{ margin: 20 }}>
        <Switch
          onChange={onChange}
          onClick={onChange}
          disabled={disabled}
          checkedChildren="开"
          unCheckedChildren="关"
        />
        <div style={{ marginTop: 20 }}>
          <button type="button" onClick={this.toggle}>
            toggle disabled
          </button>
        </div>
      </div>
    );
  }
}

import '../assets/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Switch from 'rc-switch';

function onChange(value, event) {
  console.log(`switch checked: ${value}`, event); // eslint-disable-line
}

class Demo extends React.Component {
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

ReactDOM.render(<Demo />, document.getElementById('__react-content'));

import type { SwitchProps } from '@rc-component/switch';

const props: SwitchProps = {
  checked: true,
  onChange: (checked) => {
    const value: boolean = checked;
    void value;
  },
};

void props;

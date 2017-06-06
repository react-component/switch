import Switch from '../index';
import React from 'react';
import { mount } from 'enzyme';

describe('rc-switch', () => {
  let switcher;
  beforeEach(() => {
    switcher = mount(<Switch />);
  });

  it('works', () => {
    expect(switcher.state().checked).toBe(false);
    switcher.simulate('click');
    expect(switcher.state().checked).toBe(true);
  });
});

import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { mount } from "enzyme";
import Switch from "../index";

describe("rc-switch", () => {
  let switcher;
  const checkedChildren = <span className="checked" />;
  const uncheckedChildren = <span className="unchecked" />;
  beforeEach(() => {
    switcher = mount(
      <Switch
        checkedChildren={checkedChildren}
        uncheckedChildren={uncheckedChildren}
      />
    );
  });

  it("works", () => {
    expect(switcher.find(".unchecked")).toBeTruthy();
    switcher.simulate("click");
    expect(switcher.find(".checked")).toBeTruthy();
  });

  it("should be checked upon right key and unchecked on left key", () => {
    expect(switcher.find(".unchecked")).toBeTruthy();
    switcher.simulate("keydown", { keyCode: 39 });
    expect(switcher.find(".checked")).toBeTruthy();
    switcher.simulate("keydown", { keyCode: 37 });
    expect(switcher.find(".unchecked")).toBeTruthy();
  });

  it("should change from an initial checked state of true to false on click", () => {
    const wrapper = mount(
      <Switch
        defaultChecked
        checkedChildren={checkedChildren}
        uncheckedChildren={uncheckedChildren}
      />
    );
    expect(switcher.find(".checked")).toBeTruthy();
    wrapper.simulate("click");
    expect(switcher.find(".unchecked")).toBeTruthy();
  });

  it("should support onClick", () => {
    const onClick = jest.fn();
    const wrapper = mount(<Switch onClick={onClick} />);
    wrapper.simulate("click");
    expect(onClick).toHaveBeenCalledWith(
      true,
      expect.objectContaining({ type: "click" })
    );
    expect(onClick.mock.calls.length).toBe(1);
    wrapper.simulate("click");
    expect(onClick).toHaveBeenCalledWith(
      false,
      expect.objectContaining({ type: "click" })
    );
    expect(onClick.mock.calls.length).toBe(2);
  });

  it("should not toggle when clicked in a disabled state", () => {
    const onChange = jest.fn();
    const wrapper = mount(
      <Switch
        disabled
        checked
        onChange={onChange}
        checkedChildren={checkedChildren}
        uncheckedChildren={uncheckedChildren}
      />
    );
    expect(switcher.find(".checked")).toBeTruthy();
    wrapper.simulate("click");
    expect(switcher.find(".checked")).toBeTruthy();
    expect(onChange.mock.calls.length).toBe(0);
  });

  it("should support loading icon node", () => {
    const wrapper = mount(
      <Switch loadingIcon={<span className="extra">loading</span>} />
    );
    expect(wrapper.find(".extra").text()).toBe("loading");
  });

  it("focus()", () => {
    const container = document.createElement("div");
    document.body.appendChild(container);
    const handleFocus = jest.fn();
    const ref = React.createRef();
    mount(<Switch ref={ref} onFocus={handleFocus} />, {
      attachTo: container
    });
    ref.current.focus();
    expect(handleFocus).toHaveBeenCalled();
  });

  it("blur()", () => {
    const container = document.createElement("div");
    document.body.appendChild(container);
    const handleBlur = jest.fn();
    const ref = React.createRef();
    mount(<Switch ref={ref} onBlur={handleBlur} />, {
      attachTo: container
    });
    ref.current.focus();
    ref.current.blur();
    expect(handleBlur).toHaveBeenCalled();
  });

  it("autoFocus", () => {
    const container = document.createElement("div");
    document.body.appendChild(container);
    const handleFocus = jest.fn();
    mount(<Switch autoFocus onFocus={handleFocus} />, { attachTo: container });
    expect(handleFocus).toHaveBeenCalled();
  });
});

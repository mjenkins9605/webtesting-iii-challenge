// Test away!
import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";

import Display from "./Display.js";

describe("the gate test", () => {
  it("is red-led when locked or closed", () => {
    const component = render(<Display closed={true} locked={true} />);
    const display = component.getByText("Locked");
    expect(display).toHaveClass("red-led");
  });

  it("display 'Closed' display", () => {
    const component = render(<Display closed={true} locked={false} />);
    const display = component.getByText("Unlocked");
    expect(display).toHaveClass("green-led");
  });

  it("display 'Locked' while locked", () => {
    const component = render(<Display closed={true} locked={true} />);
    component.getByText("Locked");
  });

  it("display 'Unlocked' while unlocked", () => {
    const component = render(<Display closed={false} locked={false} />);
    component.getByText("Unlocked");
  });
});

describe("the display light test", () => {
  it("is red-led when locked or closed", () => {
    const component = render(<Display closed={true} locked={false} />);
    const display = component.getByText("Closed");
    expect(display).toHaveClass("red-led");
  });

  it("is green-light when unlocked or open", () => {
    const component = render(<Display closed={false} locked={false} />);
    const display = component.getByText("Open");
    expect(display).toHaveClass("green-led");
  });
});

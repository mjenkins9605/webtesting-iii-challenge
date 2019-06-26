// Test away!
import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";

import Controls from "./Controls.js";

describe("when the button is Locked", () => {
  it("is disabled while gate is open", () => {
    const component = render(<Controls closed={false} locked={false} />);
    const button = component.getByText("Lock Gate");
    expect(button).toBeDisabled();
  });

  it("displays Unlocked while gate is closed and unlocked", () => {
    const component = render(<Controls closed={true} locked={false} />);
    component.getByText("Lock Gate");
  });

  it("displays Locked while the gate is closed and locked", () => {
    const component = render(<Controls closed={true} locked={true} />);
    component.getByText("Unlock Gate");
  });
});

describe("when the button is Unlocked", () => {
  it("is enabled while gate is unlocked", () => {
    const component = render(<Controls closed={true} locked={false} />);
    const button = component.getByText("Open Gate");
    expect(button).not.toBeDisabled();
  });

  it("displays Unlocked while gate is closed and unlocked", () => {
    const component = render(<Controls closed={true} locked={false} />);
    component.getByText("Open Gate");
  });

  it("displays Unlocked while gate is open and unlocked", () => {
    const component = render(<Controls closed={false} locked={false} />);
    component.getByText("Close Gate");
  });
});

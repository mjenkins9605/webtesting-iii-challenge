// Test away
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

import Dashboard from "./Dashboard.js";

describe("Dashboard tests", () => {
  it("renders", () => {
    render(<Dashboard />);
  });

  it("should match snapshot", () => {
    const { container } = render(<Dashboard />);
    expect(container).toMatchSnapshot();
  });

  it("should render controls and display", () => {
    const { getByText } = render(<Dashboard />);

    getByText(/unlocked/i);
    getByText(/open/i);
    getByText(/lock gate/i);
    getByText(/close gate/i);
  });
});

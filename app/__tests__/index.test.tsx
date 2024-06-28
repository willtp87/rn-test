import { render } from "@testing-library/react-native";
import React from "react";

import Index from "../index";

describe("<Index />", () => {
  it("Has expected number of children.", () => {
    const tree: any = render(<Index />).toJSON();
    expect(tree.children.length).toBe(2);
  });
});

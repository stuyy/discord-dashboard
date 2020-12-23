import * as React from "react";
import { render, screen } from "../utils/test";
import { Menu } from "../components/Menu";

it("should render Menu", () => {
  render(<Menu title="Drinks Bot Menu" />);
  const element = screen.getByText("Drinks Bot Menu");
  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});

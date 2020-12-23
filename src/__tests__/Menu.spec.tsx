import * as React from "react";
import { render, screen } from "../utils/test";
import { Menu } from "../components/Menu";
import { useHistory } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

it("should render Menu", () => {
  const history = useHistory();
  render(<Menu title="Drinks Bot Menu" history={history} />);
  const element = screen.getByText("Please Select a Guild");
  expect(element).toBeInTheDocument();
  expect(element).toMatchSnapshot();
});


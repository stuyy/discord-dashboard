/* eslint-disable jest/no-mocks-import */
import * as React from "react";
import { render } from "../utils/test";
import { Sidebar } from "../components/Sidebar";
import { guilds } from "../__mocks__";
import { useHistory } from "react-router-dom";
import { History } from "history";

let history: History;

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

beforeEach(() => {
  history = useHistory();
});

it("should render Sidebar", () => {
  const { asFragment } = render(<Sidebar guilds={guilds} history={history} />);
  const firstRender = asFragment();
  expect(firstRender).toMatchSnapshot();
});

it("should render sidebar with 16 elements", () => {
  const { container } = render(<Sidebar history={history} guilds={guilds} />);
  const div = container.getElementsByClassName("guild-icon");
  expect(div.length).toBe(16);
});

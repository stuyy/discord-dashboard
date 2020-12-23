/* eslint-disable jest/no-mocks-import */
import * as React from "react";
import { render, screen } from "../utils/test";
import { Sidebar } from "../components/Sidebar";
import { guilds } from "../__mocks__";

it("should render Sidebar", () => {
  const { asFragment } = render(<Sidebar guilds={guilds} />);
  const firstRender = asFragment();
  expect(firstRender).toMatchSnapshot();
});

it("should render sidebar with 16 elements", () => {
  const { container } = render(<Sidebar guilds={guilds} />);
  const div = container.getElementsByClassName("guild-icon");
  expect(div.length).toBe(16);
});

import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "./themes";

const Providers = ({ children }: any) => {
  return <ThemeProvider theme={DarkTheme}>{children}</ThemeProvider>;
};

const customRender = (ui: any, options?: any) =>
  render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";
export { customRender as render };

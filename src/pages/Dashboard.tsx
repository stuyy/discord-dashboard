import * as React from "react";
import { DashboardHeader, BasePageStyle } from "../utils/styles";

type DashboardProps = {};

export const DashboardPage = (props: DashboardProps) => (
  <BasePageStyle>
    <DashboardHeader>Dashboard Page</DashboardHeader>
  </BasePageStyle>
);

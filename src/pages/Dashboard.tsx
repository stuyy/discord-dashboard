import * as React from "react";
import { DashboardPageStyle, DashboardHeader } from "../utils/styles";

type DashboardProps = {};

export const DashboardPage = (props: DashboardProps) => (
  <DashboardPageStyle>
    <DashboardHeader>Dashboard Page</DashboardHeader>
  </DashboardPageStyle>
);

import * as React from "react";
import { BasePageStyle, DashboardHeader } from "../utils/styles";

type GeneralPageProps = {};

export const GeneralPage = (props: GeneralPageProps) => (
  <BasePageStyle>
    <DashboardHeader>Dashboard Page</DashboardHeader>
  </BasePageStyle>
);

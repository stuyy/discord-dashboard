import * as React from "react";
import { useContext } from "react";
import GuildContext from "../utils/contexts/GuildContext";
import { DashboardHeader, BasePageStyle } from "../utils/styles";

type DashboardProps = {};

export const DashboardPage = (props: DashboardProps) => {
  const { guild } = useContext(GuildContext);
  if (!guild)
    return (
      <BasePageStyle>
        <DashboardHeader>Please Select a Guild</DashboardHeader>
      </BasePageStyle>
    );
  return (
    <BasePageStyle>
      <DashboardHeader>General / Muted</DashboardHeader>
    </BasePageStyle>
  );
};

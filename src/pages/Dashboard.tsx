import * as React from "react";
import { useContext, useEffect } from "react";
import GuildContext from "../utils/contexts/GuildContext";
import { GuildStoreContext } from "../utils/contexts/GuildStoreContext";
import { DashboardHeader, BasePageStyle } from "../utils/styles";

type DashboardProps = {
  match?: any;
};

export const DashboardPage = (props: DashboardProps) => {
  const { guildId } = props.match.params;
  const { guild, setGuild } = useContext(GuildContext);
  const { guilds } = useContext(GuildStoreContext);

  useEffect(() => {
    const findGuild = guilds.find((g) => g.id === guildId);
    setGuild(findGuild);
  });

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

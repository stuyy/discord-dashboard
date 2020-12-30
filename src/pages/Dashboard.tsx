import * as React from "react";
import { useContext, useEffect } from "react";
import { DropdownMenu } from "../components/DropdownMenu";
import { selectMenuItems } from "../utils/constants";
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
      <DashboardHeader>General</DashboardHeader>
      <div style={{ padding: "20px" }}>
        <DropdownMenu title="Update Default Role" items={selectMenuItems} />
        <div style={{ margin: "2.5px 0px" }} />
        <DropdownMenu title="Update Moderator Role" items={selectMenuItems} />
        <div style={{ margin: "2.5px 0px" }} />
        <DropdownMenu title="Update Muted Role" items={selectMenuItems} />
        <div style={{ margin: "2.5px 0px" }} />
      </div>
    </BasePageStyle>
  );
};

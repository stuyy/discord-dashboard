import * as React from "react";
import { useContext } from "react";
import GuildContext from "../utils/contexts/GuildContext";
import {
  SidebarStyle,
  SidebarHeader,
  IconStyle,
  SidebarContent,
  GuildIcon,
} from "../utils/styles";
import { Guild } from "../utils/types";
import { History } from "history";

type SidebarProps = {
  guilds: Guild[];
  history: History;
};

export const Sidebar = (props: SidebarProps) => {
  const { setGuild } = useContext(GuildContext);
  return (
    <SidebarStyle>
      <SidebarHeader>
        <IconStyle />
      </SidebarHeader>
      <SidebarContent>
        {props.guilds.map((guild) => (
          <GuildIcon
            className="guild-icon"
            key={guild.id}
            onClick={() => {
              setGuild(guild);
              props.history.push(`/dashboard/${guild.id}`);
            }}
          />
        ))}
      </SidebarContent>
    </SidebarStyle>
  );
};

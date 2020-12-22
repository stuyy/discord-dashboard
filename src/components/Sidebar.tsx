import * as React from "react";
import {
  SidebarStyle,
  SidebarHeader,
  IconStyle,
  SidebarContent,
  GuildIcon,
} from "../utils/styles";
import { Guild } from "../utils/types";

type SidebarProps = {
  guilds: Guild[];
};

export const Sidebar = (props: SidebarProps) => {
  return (
    <SidebarStyle>
      <SidebarHeader>
        <IconStyle />
      </SidebarHeader>
      <SidebarContent>
        {props.guilds.map((guild) => (
          <GuildIcon />
        ))}
      </SidebarContent>
    </SidebarStyle>
  );
};

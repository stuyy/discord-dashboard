import { MenuGroup } from "./types";

export const menuItems = (guildId: string): MenuGroup[] => [
  {
    name: "Security",
    path: "/security",
    routes: [
      {
        name: "Authentication",
        path: `/dashboard/${guildId}/security/authentication`,
      },
      {
        name: "Roles",
        path: `/dashboard/${guildId}/security/roles`,
      },
    ],
  },
  {
    name: "General",
    path: "/general",
    routes: [
      {
        name: "Muted",
        path: `/dashboard/${guildId}/general/muted`,
      },
      {
        name: "Guild Prefix",
        path: `/dashboard/${guildId}/general/prefix`,
      },
    ],
  },
  {
    name: "Miscellaneous",
    path: "/miscellaneous",
    routes: [
      {
        name: "Commands",
        path: `/dashboard/${guildId}/miscellaneous/fun-commands`,
      },
      {
        name: "Levels",
        path: `/dashboard/${guildId}/miscellaneous/levels`,
      },
    ],
  },
];

import { MenuGroup } from "./types";

export const menuItems: MenuGroup[] = [
  {
    name: "Security",
    path: "/security",
    routes: [
      {
        name: "Authentication",
        path: "/security/authentication",
      },
      {
        name: "Roles",
        path: "/security/roles",
      },
    ],
  },
  {
    name: "General",
    path: "/general",
    routes: [
      {
        name: "General",
        path: "/general/muted",
      },
      {
        name: "Roles",
        path: "/general/prefix",
      },
    ],
  },
  {
    name: "Miscellaneous",
    path: "/miscellaneous",
    routes: [
      {
        name: "Fun Commands",
        path: "/miscellaneous/fun-commands",
      },
      {
        name: "Levels",
        path: "/miscellaneous/levels",
      },
    ],
  },
];

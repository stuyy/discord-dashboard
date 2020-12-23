import * as React from "react";
import { useContext } from "react";
import {
  MenuStyle,
  MenuHeader,
  MenuContent,
  MenuCategory,
  MenuCategoryItem,
} from "../utils/styles";
import { menuItems } from "../utils/constants";
import { History } from "history";
import GuildContext from "../utils/contexts/GuildContext";

type MenuProps = {
  title: string;
  history: History;
};

export const Menu = ({ title, history }: MenuProps) => {
  const { guild } = useContext(GuildContext);
  if (!guild)
    return (
      <MenuStyle>
        <MenuHeader>Please Select a Guild</MenuHeader>
      </MenuStyle>
    );

  return (
    <MenuStyle>
      <MenuHeader onClick={() => history.push("/dashboard")}>
        {title}
      </MenuHeader>
      <MenuContent>
        {menuItems(guild.id).map((item) => (
          <MenuCategory key={item.name}>
            <span>{item.name}</span>
            {item.routes.map((route) => (
              <MenuCategoryItem
                key={route.name}
                onClick={() => history.push(route.path)}
              >
                <span># {route.name}</span>
              </MenuCategoryItem>
            ))}
          </MenuCategory>
        ))}
      </MenuContent>
    </MenuStyle>
  );
};

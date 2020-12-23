import * as React from "react";
import {
  MenuStyle,
  MenuHeader,
  MenuContent,
  MenuCategory,
  MenuCategoryItem,
} from "../utils/styles";
import { menuItems } from "../utils/constants";
import { History } from "history";

type MenuProps = {
  title: string;
  history: History;
};

export const Menu = ({ title, history }: MenuProps) => {
  return (
    <MenuStyle>
      <MenuHeader onClick={() => history.push("/dashboard")}>
        {title}
      </MenuHeader>
      <MenuContent>
        {menuItems("123").map((item) => (
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

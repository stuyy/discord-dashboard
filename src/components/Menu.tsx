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

const mapCategories = (history: History) =>
  menuItems.map((item) => (
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
  ));

export const Menu = (props: MenuProps) => {
  console.log(props);
  return (
    <MenuStyle>
      <MenuHeader onClick={() => props.history.push("/dashboard")}>
        {props.title}
      </MenuHeader>
      <MenuContent>{mapCategories(props.history)}</MenuContent>
    </MenuStyle>
  );
};

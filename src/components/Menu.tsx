import * as React from "react";
import { MenuStyle, MenuHeader } from "../utils/styles";

type MenuProps = {
  title: string;
};

export const Menu = (props: MenuProps) => {
  return (
    <MenuStyle>
      <MenuHeader>{props.title}</MenuHeader>
    </MenuStyle>
  );
};

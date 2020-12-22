export interface Theme {
  base?: any;
  text?: any;
  height?: any;
}

export const LightTheme: Theme = {};

export const DarkTheme: Theme = {
  base: {
    sidebar: "#202225",
    menu: "#2F3136",
    content: "#36393F",
  },
  text: {
    main: "#FFFFFF",
  },
  height: {
    topContent: "75px",
  },
};

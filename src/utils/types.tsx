export type Guild = {
  id: string;
  name: string;
  icon?: string;
  banner?: string;
  description?: string;
};

export type MenuGroup = {
  name: string;
  path: string;
  routes: Route[];
};

export type Route = {
  name: string;
  path: string;
};

export type MenuItem = {
  name: string;
  value: string;
};

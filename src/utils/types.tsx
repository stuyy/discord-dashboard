export type Guild = {
  id: string;
  name: string;
  avatar: string;
};

export type MenuGroup = {
  name: string;
  path: string;
  routes: Route[];
}

export type Route = {
  name: string;
  path: string;
}
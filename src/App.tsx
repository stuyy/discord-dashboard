import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Sidebar } from "./components/Sidebar";
import { DashboardPage } from "./pages/Dashboard";
import { Guild } from "./utils/types";

export const guilds: Guild[] = [
  {
    id: "123",
    name: "Developers",
    avatar: "",
  },
  {
    id: "124",
    name: "Developers",
    avatar: "",
  },
  {
    id: "125",
    name: "Developers",
    avatar: "",
  },
  {
    id: "126",
    name: "Developers",
    avatar: "",
  },
  {
    id: "123",
    name: "Developers",
    avatar: "",
  },
  {
    id: "124",
    name: "Developers",
    avatar: "",
  },
  {
    id: "125",
    name: "Developers",
    avatar: "",
  },
  {
    id: "126",
    name: "Developers",
    avatar: "",
  },
  {
    id: "123",
    name: "Developers",
    avatar: "",
  },
  {
    id: "124",
    name: "Developers",
    avatar: "",
  },
  {
    id: "125",
    name: "Developers",
    avatar: "",
  },
  {
    id: "126",
    name: "Developers",
    avatar: "",
  },
  {
    id: "123",
    name: "Developers",
    avatar: "",
  },
  {
    id: "124",
    name: "Developers",
    avatar: "",
  },
  {
    id: "125",
    name: "Developers",
    avatar: "",
  },
  {
    id: "126",
    name: "Developers",
    avatar: "",
  },
];

function App() {
  return (
    <div style={{}}>
      <Sidebar guilds={guilds} />
      <Menu title="Drinks Bot Menu" />
      <Switch>
        <Redirect path="/" exact={true} to="/dashboard" />
        <Route path="/dashboard" exact={true} component={DashboardPage} />
      </Switch>
    </div>
  );
}

export default App;

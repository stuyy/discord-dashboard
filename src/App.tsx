import * as React from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Sidebar } from "./components/Sidebar";
import { DashboardPage } from "./pages/Dashboard";
import { guilds } from "./__mocks__";

function App() {
  const history = useHistory();
  return (
    <div>
      <Sidebar guilds={guilds} />
      <Menu title="Drinks Bot Menu" history={history} />
      <Switch>
        <Redirect path="/" exact={true} to="/dashboard" />
        <Route path="/dashboard" exact={true} component={DashboardPage} />
        <Route
          path="/dashboard/:guildId"
          exact={true}
          component={DashboardPage}
        />
        <Route
          path="/dashboard/:guildId/general/muted"
          exact={true}
          component={DashboardPage}
        />
      </Switch>
    </div>
  );
}

export default App;

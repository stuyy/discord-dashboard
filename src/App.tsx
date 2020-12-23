import * as React from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Sidebar } from "./components/Sidebar";
import { DashboardPage } from "./pages/Dashboard";
import { GuildContextProvider } from "./utils/contexts/GuildContext";
import { GuildStoreContextProvider } from "./utils/contexts/GuildStoreContext";
import { Guild } from "./utils/types";
import { guilds as mockGuilds } from "./__mocks__";

function App() {
  const [guild, setGuild] = React.useState<Guild | undefined>();
  const [guilds, setGuilds] = React.useState<Guild[]>([]);
  const history = useHistory();

  React.useEffect(() => {
    console.log("Setting Guilds");
    setGuilds(mockGuilds);
  }, []);

  return (
    <div>
      <GuildContextProvider value={{ guild, setGuild }}>
        <GuildStoreContextProvider value={{ guilds, setGuilds }}>
          <Sidebar guilds={guilds} history={history} />
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
        </GuildStoreContextProvider>
      </GuildContextProvider>
    </div>
  );
}

export default App;

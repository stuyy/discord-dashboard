import * as React from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Sidebar } from "./components/Sidebar";
import { DashboardPage } from "./pages/Dashboard";
import { GuildContextProvider } from "./utils/contexts/GuildContext";
import { GuildStoreContextProvider } from "./utils/contexts/GuildStoreContext";
import { Guild } from "./utils/types";
import { useQuery } from "@apollo/client";
import { getUser } from "./graphql";
import { guilds as mockGuilds } from "./__mocks__";

function App() {
  const [guild, setGuild] = React.useState<Guild | undefined>();
  const [guilds, setGuilds] = React.useState<Guild[]>([]);
  const history = useHistory();

  // const { loading, error } = useQuery(getUser, {
  //   onCompleted: ({ getUser }) => {
  //     const { guilds } = getUser;
  //     setGuilds(guilds);
  //   },
  // });

  // console.log(error);

  // if (loading) return <h1>Loading</h1>;
  // if (error) return <h1>You are making too many requests.</h1>;

  React.useEffect(() => {
    console.log("Setting Guilds");
    setGuilds(mockGuilds);
  }, []);

  return (
    <Providers
      guild={guild}
      setGuild={setGuild}
      guilds={guilds}
      setGuilds={setGuilds}
    >
      <Sidebar guilds={guilds} history={history} />
      <Menu title="Drinks Bot Menu" history={history} />
      <Routes />
    </Providers>
  );
}

function Providers({ children, guild, setGuild, guilds, setGuilds }: any) {
  return (
    <GuildContextProvider value={{ guild, setGuild }}>
      <GuildStoreContextProvider value={{ guilds, setGuilds }}>
        {children}
      </GuildStoreContextProvider>
    </GuildContextProvider>
  );
}

function Routes() {
  return (
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
  );
}

export default App;

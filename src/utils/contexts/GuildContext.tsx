import * as React from "react";
import { Guild } from "../types";

type GuildContextType = {
  guild?: Guild;
  setGuild: Function;
};

const GuildContext = React.createContext<GuildContextType>({
  guild: undefined,
  setGuild: () => {},
});

export const GuildContextProvider = GuildContext.Provider;

export default GuildContext;

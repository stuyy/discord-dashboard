import { createContext } from "react";
import { Guild } from "../types";

type GuildStoreContextType = {
  guilds: Guild[];
  setGuilds: Function;
};

export const GuildStoreContext = createContext<GuildStoreContextType>({
  guilds: [],
  setGuilds: (guilds: Guild[]) => {},
});

export const GuildStoreContextProvider = GuildStoreContext.Provider;

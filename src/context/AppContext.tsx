"use client";

import { createContext, useContext, useEffect } from "react";

import pkg from "../../package.json";

interface AppContextValue {
  version: string;
  name: string;
}

const AppContext = createContext<AppContextValue>({
  version: pkg.version,
  name: pkg.name,
});

interface AppProviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  useEffect(() => {
    console.log(`Version: v-${pkg.version}`);
  }, []);

  return (
    <AppContext.Provider value={{ version: pkg.version, name: pkg.name }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp(): AppContextValue {
  return useContext(AppContext);
}

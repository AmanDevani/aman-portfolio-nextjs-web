"use client";

import { APP_VERSION } from "@/lib/constant";
import { createContext, useContext, useEffect } from "react";

const AppContext = createContext(null);

export const useApp = () => {
  const context = useContext(AppContext);

  if (!context) throw new Error("useApp must be used with in AppProvider");

  return context;
};

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    console.log("Version:", APP_VERSION);
  }, []);

  return <AppContext.Provider value={null}>{children}</AppContext.Provider>;
};
export default AppProvider;

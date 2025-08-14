import React from "react";
import ThemeProvider from "./theme-provider";
import AppProvider from "./app-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <AppProvider>{children}</AppProvider>
    </ThemeProvider>
  );
};

export default Providers;

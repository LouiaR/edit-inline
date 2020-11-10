import { createContext, useContext } from "react";

const appContext = createContext();

export const useAppContext = () => useContext(appContext);

export const AppContextProvider = ({ value, children }) => (
  <appContext.Provider value={value}>{children}</appContext.Provider>
);

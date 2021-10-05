import React, { createContext, useContext } from "react";

const AppContext = createContext();

export const useNavContext = () => useContext(AppContext);

function AppContextProvider({ children }) {
  return <AppContext.Provider>{children}</AppContext.Provider>;
}

export default AppContextProvider;

import React, { useState, createContext, useContext } from "react";
const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

function UserContextProvider({ children }) {
  const [join, setJoin] = useState({
    userid: "",
    password: "",
    password_2: "",
    e_mail: "",
  });

  const propsStore = {
    join,
    setJoin,
  };
  return (
    <UserContext.Provider value={propsStore}>{children}</UserContext.Provider>
  );
}

export default UserContextProvider;

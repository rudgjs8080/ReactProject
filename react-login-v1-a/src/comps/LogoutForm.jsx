import React, { useEffect } from "react";
import { useHistory } from "react-router";
import UserContextProvider, {
  useUserContext,
} from "../context/UserContextProvider";

function LogoutForm() {
  const history = useHistory();
  const { setJoin } = useUserContext();
  useEffect(() => {
    const logout = async () => {
      await setJoin([]);
      history.replace("/");
    };
    logout();
  }, []);
  return <div></div>;
}

export default LogoutForm;

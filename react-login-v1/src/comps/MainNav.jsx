import React from "react";
import "../css/MainNav.css";
import AppContextProvider from "../context/AppContextProvider";
import { BrowserRouter, NavLink } from "react-router-dom";

function MainNav({ navList }) {
  const nav_items = navList.map((nav) => {
    return (
      <div>
        <NavLink to={nav.link}>{nav.title}</NavLink>
      </div>
    );
  });
  return (
    <AppContextProvider>
      <BrowserRouter>
        <div className="nav_box">{nav_items}</div>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default MainNav;

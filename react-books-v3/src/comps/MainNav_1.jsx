import React from "react";
import { NavLink } from "react-router-dom";
import "../css/MainNav_1.css";

/**
 * navigation 모양을 디자인한 컴포넌트
 */

function MainNav_1() {
  return (
    <nav className="main_nav_1">
      <NavLink to="/" exact>
        HOME
      </NavLink>
      <NavLink to="/insert" exact>
        Insert
      </NavLink>
      <NavLink to="list" exact>
        List View
      </NavLink>
    </nav>
  );
}

export default MainNav_1;

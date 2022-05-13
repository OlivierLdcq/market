import React from "react";
import { Outlet } from "react-router-dom";

import { NavigationWrap, Logo } from "./Navigation.Style.js";

const Navigation = () => {
  return (
    <>
      <NavigationWrap>
        {" "}
        <div style={{ display: "flex", alignItems: "center" }}>
          <Logo />
          <span>HOME</span>
          <span>SHOP</span>
        </div>
        <div>
          <span>SIGNIN</span>
        </div>
      </NavigationWrap>
      <Outlet />
    </>
  );
};

export default Navigation;

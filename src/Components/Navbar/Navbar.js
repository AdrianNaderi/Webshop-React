import React from "react";
import Content from "../Layout/Content";
import NavbarBottom from "./NavbarBottom";
import NavbarMiddle from "./NavbarMiddle";
import NavbarTop from "./NavbarTop";

const Navbar = () => {
  return (
    <header>
      <Content>
        <NavbarTop />
      </Content>
      <Content>
        <NavbarMiddle />
      </Content>
      <Content>
        <NavbarBottom />
      </Content>
    </header>
  );
};

export default Navbar;

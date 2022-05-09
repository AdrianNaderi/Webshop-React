import React from "react";
import NavbarBottom from "./NavbarBottom";
import NavbarMiddle from "./NavbarMiddle";
import NavbarTop from "./NavbarTop";

const Navbar = () => {
  return (
    <header>
      <NavbarTop />
      <NavbarMiddle />
      <NavbarBottom />
    </header>
  );
};

export default Navbar;

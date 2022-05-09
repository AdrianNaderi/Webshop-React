import React from "react";
import NavbarBottomDropDown from "./NavBarBottomDropDown";
import classes from "./NavbarBottom.module.css";

const NavbarBottom = () => {
  return (
    <div className={classes.container}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavbarBottomDropDown />
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">Categories</a>
          </li>
          <li>
            <a href="">Pages</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarBottom;

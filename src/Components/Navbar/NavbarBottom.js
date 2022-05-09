import React from "react";
import NavbarBottomDropDown from "./NavBarBottomDropDown";
import classes from "./NavbarBottom.module.css";

const NavbarBottom = () => {
  return (
    <div className={classes.container}>
      <NavbarBottomDropDown />
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">
            Shop <i className="bi bi-chevron-down"></i>
          </a>
        </li>
        <li>
          <a href="#">
            Products <i className="bi bi-chevron-down"></i>
          </a>
        </li>
        <li>
          <a href="#">
            Categories <i className="bi bi-chevron-down"></i>
          </a>
        </li>
        <li>
          <a href="#">
            Pages <i className="bi bi-chevron-down"></i>
          </a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>
      <button className={classes.btnOffer}>SPECIAL OFFER</button>
    </div>
  );
};

export default NavbarBottom;

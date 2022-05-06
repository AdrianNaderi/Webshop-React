import React from "react";
import classes from "./NavbarTop.module.css";

const NavbarTop = () => {
  return <>
    <div className={classes.top}>
      <div className={classes.dropdown}>
        <select className={classes.language}>
          <option value="language">ENG</option>
          <option value="language">SVE</option>
        </select>

        <select className={classes.currency}>
          <option value="currency">USD</option>
          <option value="currency">SEK</option>
        </select>
      </div>

      <div className={classes.topright}>
        <p><a href="#" className={classes.right}>Newsletter</a></p>
        {<p className={classes.space}>space</p>}
        <p><a href="#" className={classes.right}>Contact Us</a></p>
        <p className={classes.space}>space</p>
        <p><a href="#" className={classes.right}>FAQs</a></p>
        <p className={classes.space}>space</p>
        <p><a href="#" className={classes.right}>[] [] [] [] []</a></p>
      </div>
    </div>
  </>;
};

export default NavbarTop;

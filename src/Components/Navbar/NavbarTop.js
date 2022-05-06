import React from "react";
import classes from "./NavbarTop.module.css";

const NavbarTop = () => {
  return <>
  <div className={classes.top}>
    <div className={classes.images}>
  <img src="/img/topleft.png" className={classes.imgleft}/>
  <img src="/img/topright.png" class={classes.imgright} />
</div>
</div>
  </>;
};

export default NavbarTop;

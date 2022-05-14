import React from "react";
import classes from "./NavbarMiddle.module.css";
import { MenuItems } from "./MenuItems";

const NavbarMiddle = () => {
  return (
     <nav className={classes.container}>
       <img src="/img/kenkatawhite.jpg" className={classes.img} />
       <div className={classes.searchbar}>
         <input className={classes.search} type="text" name="search" placeholder="    Search products..."></input>
         <select className={classes.categories}>
           <option value="Categories">Categories</option>
         </select>
         <button className={classes.button}><i class="bi bi-search"></i></button>
      </div>
       <ul>
         {MenuItems.map((item, index) => {
           return (
            <li><a className={item.cName} href={item.url}>{item.title}</a></li>
           )
         })}
       </ul>      
     </nav>
  );
};

export default NavbarMiddle;

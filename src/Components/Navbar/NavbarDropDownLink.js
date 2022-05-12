import { Link } from "react-router-dom";
import classes from "./NavBarDropDownLink.module.css";

const NavbarDropDownLink = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.dropdown}>
        <button className={classes.dropbtn}>
          Pages&nbsp;
          <i className="bi bi-chevron-down"></i>
        </button>
        <div className={classes["dropdown-content"]}>
          <Link to="/home">Link 1</Link>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>
  );
};

export default NavbarDropDownLink;

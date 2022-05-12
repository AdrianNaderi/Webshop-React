import { NavLink } from "react-router-dom";
import BrowseCategories from "./NavBarBrowseCategories";
import DropDownLink from "./NavbarDropDownLink";
import classes from "./NavbarBottom.module.css";

const NavbarBottom = () => {
  return (
    <>
      <div className={classes["col-one"]}>
        <BrowseCategories />
      </div>
      <div className={classes["col-two"]}>
        <ul>
          <li>
            <NavLink
              end
              to="/home"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              end
              to="/home/shop"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Shop <i className="bi bi-chevron-down"></i>
            </NavLink>
          </li>
          <li>
            <NavLink
              end
              to="/home/shop/products"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Products <i className="bi bi-chevron-down"></i>
            </NavLink>
          </li>
          <li>
            <a href="#">
              Categories <i className="bi bi-chevron-down"></i>
            </a>
          </li>
          <li>
            <DropDownLink />
          </li>
          <li>
            <NavLink
              end
              to="/home/blog"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={classes["col-tre"]}>
        <button className={classes["btn-offer"]}>SPECIAL OFFER</button>
      </div>
    </>
  );
};

export default NavbarBottom;

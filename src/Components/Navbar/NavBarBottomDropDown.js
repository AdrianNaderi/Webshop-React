import classes from "./NavBarBottomDropDown.module.css";

const NavbarBottomDropDown = () => {
  const dropDownHandler = () => {};

  return (
    <div className={classes.dropdown}>
      <button onclick={dropDownHandler} className={classes.dropbtn}>
        Browse Categories
      </button>
      <div id="myDropdown" className={classes["dropdown-content"]}>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  );
};

export default NavbarBottomDropDown;

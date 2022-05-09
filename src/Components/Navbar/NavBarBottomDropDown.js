import classes from "./NavBarBottomDropDown.module.css";

const NavbarBottomDropDown = () => {
  const dropDownHandler = () => {};

  return (
    <div className={classes.container}>
      <i class="bi bi-list"></i>
      <select className={classes.select}>
        <option selected disabled>
          Browse Categories
        </option>
        <option value="">Cat 1</option>
        <option value="">Cat 2</option>
        <option value="">Cat 3</option>
        <option value="">Cat 4</option>
      </select>
    </div>
  );
};

export default NavbarBottomDropDown;

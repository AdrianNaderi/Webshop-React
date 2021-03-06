import classes from "./NavBarBrowseCategories.module.css";

const NavBarBrowseCategories = () => {
  return (
    <div className={classes.container}>
      <i className="bi bi-list"></i>
      <select className={classes.select}>
        <option value="">Browse Categories</option>
        <option value="" disabled>
          Cat 1
        </option>
        <option value="" disabled>
          Cat 2
        </option>
        <option value="" disabled>
          Cat 3
        </option>
        <option value="" disabled>
          Cat 4
        </option>
      </select>
    </div>
  );
};

export default NavBarBrowseCategories;

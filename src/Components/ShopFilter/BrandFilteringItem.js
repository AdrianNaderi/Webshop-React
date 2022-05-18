import Brands from "../Brands/Brands";
import classes from "./BrandFilteringItem.module.css";

const BrandFilteringItem = (props) => {
  const activeStyle = props.active ? classes.active : classes.notactive;
  return (
    <>
      <div className={`${classes.btn} ${activeStyle}`} onClick={() => props.onActive(props.brand)}>
        {<Brands brand={props.brand} />}
      </div>
    </>
  );
};

export default BrandFilteringItem;

import Brands from "../Brands/Brands";
import classes from "./BrandFilteringItem.module.css"

const BrandFilteringItem = (props) => {
  return (
    <div className={classes.brand}>
      <div>{<Brands brand={props.brand} />}</div>
    </div>
  );
};

export default BrandFilteringItem;

import { useState } from "react";
import BrandFilteringItem from "./BrandFilteringItem";
import classes from "./BrandFilteringItem.module.css";

const BrandFiltering = (props) => {
  const [target, setTarget] = useState(null);

  const handleActive = (name) => {
    if (name === target) {
      props.onRemoveFilter();
      setTarget(null);
      return;
    }
    props.onFiltering(name);
    setTarget(name);
  };

  const brands = props.brands.map((brand) => <BrandFilteringItem key={props.brand} brand={brand.name.toLowerCase()} active={brand.name === target ? true : false} onActive={handleActive} />);
  return (
    <div className={classes.filter}>
      <h4 className={classes.title}>{props.title}</h4>
      {brands}
    </div>
  );
};

export default BrandFiltering;

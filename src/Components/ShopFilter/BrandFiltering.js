import BrandFilteringItem from "./BrandFilteringItem";
import classes from "./BrandFilteringItem.module.css";

const BrandFiltering = (props) => {
  const brands = props.brands.map((brand) => <BrandFilteringItem key={props.brand} brand={brand.name.toLowerCase()} />);
  return (
    <>
      <h4 className={classes.title}>{props.title}</h4>
      {brands}
    </>
  );
};

export default BrandFiltering;

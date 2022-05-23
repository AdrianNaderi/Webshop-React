import ProductCard from "../Shop/ProductCard";
import classes from "./Shop.module.css";
const Shop = () => {
  return (
    <div className={classes.grid}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default Shop;

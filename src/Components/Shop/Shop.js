import { useEffect } from "react";
import { useSelector } from "react-redux";
import useHttp from "../../hooks/useHttp";
import { getAllProducts, getAllProductsWithFilterAsync } from "../../lib/Filter/ShopFilterRequests";
import ProductCard from "../Shop/ProductCard";
import classes from "./Shop.module.css";
const Shop = () => {
  const category = useSelector((state) => state.filter.categories);
  const color = useSelector((state) => state.filter.colors);
  const size = useSelector((state) => state.filter.sizes);
  const brand = useSelector((state) => state.filter.brand);

  const onSale = useSelector((state) => state.filter.onSale);
  const inStock = useSelector((state) => state.filter.inStock);
  const displayCount = useSelector((state) => state.filter.displayCount);
  const page = useSelector((state) => state.filter.page);
  const { sendReq, data, error, loading } = useHttp(getAllProductsWithFilterAsync, true);

  useEffect(() => {
    sendReq({ category, color, size, brand, onSale, inStock, displayCount, page });
  }, [category, color, size, brand, onSale, inStock, displayCount, page]);
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

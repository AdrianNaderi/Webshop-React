import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classes from "./ProductDetail.module.css";
import ProductDetailCart from "./ProductDetailCart";

const ProductDetail = () => {
  const params = useParams();
  const [product, SetProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProductHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const respons = await fetch(`https://localhost:44300/api/Products/${params.productId}`);
      if (!respons.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await respons.json();
      SetProduct(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [params.productId]);

  useEffect(() => {
    fetchProductHandler();
  }, [fetchProductHandler]);

  const addToCartHandler = (counter) => {
    const quantity = counter;
  };

  const tags = ["Fashion", "Shoes", "Sneakers"].map((item) => <button>{item}</button>);

  return (
    <div className={classes.container}>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      <section className={classes.description}>
        <h3 className={classes["cat-span"]}>{product.name}</h3>
        <span>{product.description}</span>
      </section>
      <div className={classes.detail}>
        <section className={classes.pricing}>
          <hr />
          {product.onSale ? (
            <>
              <span className={classes.sale}>${product.salePrice}</span>
              <span className={classes.price}>${product.price}</span>
            </>
          ) : (
            <span className={classes.sale}>${product.price}</span>
          )}

          {product.quantity > 0 ? (
            <span>
              <i className={`bi bi-check-square-fill ${classes["in-stock"]}`}></i> In Stock
            </span>
          ) : (
            <span>
              <i class={`bi bi-x-square-fill ${classes["no-stock"]}`}></i> Out Of Stock
            </span>
          )}
        </section>
        <ProductDetailCart onAddToCartSubmit={addToCartHandler} />
        <section className={classes.tags}>
          <span>
            Category: <span className={classes["cat-span"]}>{product.category}</span>
          </span>
          <span>
            Tags: &nbsp;&nbsp;
            {tags}
          </span>
          <section className={classes.share}>
            <span>Share:&nbsp;&nbsp;</span>
            <img src="/img/share.jpg" alt="" />
          </section>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;

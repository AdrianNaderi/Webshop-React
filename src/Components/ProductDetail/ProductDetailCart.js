import { useState } from "react";
import classes from "./ProductDetailCart.module.css";

const ProductDetailCart = (props) => {
  let [counter, setCounter] = useState(0);
  let incrementCounter = () => {
    if (counter < 10) {
      setCounter(Number(counter) + 1);
    }
  };
  let decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  let counterHandler = (e) => {
    setCounter(e.target.value);
  };

  const cartQuantityHandler = () => {
    props.onAddToCartSubmit(counter);
    setCounter(0);
  };

  return (
    <div className={classes.container}>
      <div className={classes["quantity-wrapper"]}>
        <button className={classes.minus} onClick={decrementCounter}>
          -
        </button>
        <input type="text" value={counter} onChange={counterHandler} />
        <button className={classes.plus} onClick={incrementCounter}>
          +
        </button>
      </div>
      <div>
        <button className={classes["btn-add"]} onClick={cartQuantityHandler}>
          <i className="bi bi-cart2"></i>&nbsp;
          <span>Add to cart</span>
        </button>
      </div>
      <div>
        <img src="/img/ProductDetailPlaceholder.png" alt="" />
      </div>
    </div>
  );
};

export default ProductDetailCart;

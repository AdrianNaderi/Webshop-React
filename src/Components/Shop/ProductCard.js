import { useReducer, useState } from "react";
import classes from "./ProductCard.module.css";

const ProductCard = (props) => {
  const activeReducer = (state, active) => {
    if (active.type === "ACTIVE") {
      return true;
    }
    if (active.type === "INACTIVE") {
      return false;
    }
  };

  const [activeState, dispatch] = useReducer(activeReducer, false);
  const handleActive = () => {
    dispatch({ type: "ACTIVE" });
  };

  const handleInactive = () => {
    dispatch({ type: "INACTIVE" });
  };

  return (
    <>
      {!activeState && (
        <div className={classes.base} onMouseOver={handleActive} onMouseLeave={handleInactive}>
          <div className={classes.card}>
            <img src="/img/dress.png" className={classes.img} />
          </div>
          <div className={classes.lower}>
            <span className={classes["product-name"]}>This is the dress displayed</span>
          </div>
        </div>
      )}
      {activeState && (
        <div className={classes.base} onMouseOver={handleActive} onMouseLeave={handleInactive}>
          <div className={classes["card-back"]}>
            <div>Nav</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;

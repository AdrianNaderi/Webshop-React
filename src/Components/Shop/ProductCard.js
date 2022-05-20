import { useReducer, useState } from "react";
import classes from "./ProductCard.module.css";
import StatusIconSection from "./StatusIconsSection";

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
      <div className={classes.base} onMouseOver={handleActive} onMouseLeave={handleInactive}>
        {!activeState && (
          <>
            <div className={classes.card}>
              <StatusIconSection />
              <div className={classes.lower}>
                <span className={classes["product-name"]}>This is the dress displayed</span>
              </div>
            </div>
            <img src="/img/dress.png" className={classes.img} />
          </>
        )}
        {activeState && (
          <>
            <div className={classes["card-back"]}>
              <div>Nav</div>
            </div>
            <img src="/img/dress.png" className={classes.imgback} />
          </>
        )}
      </div>
    </>
  );
};

export default ProductCard;

import { useReducer, useState } from "react";
import NavigationSection from "./NavigationSection";
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
                <span className={classes["product-name"]}>{props.product.name}</span>
              </div>
            </div>
            <img src={props.product.imagePath} className={classes.img} />
          </>
        )}
        {activeState && (
          <>
            <div className={classes["card-back"]}>
              <div className={classes.liftup}>
                <NavigationSection colors={props.product.colors}/>
              </div>
              <div className={classes["product-name"]}>{props.product.description}</div>
            </div>
            <img src={props.product.imagePath} className={classes.imgback} />
          </>
        )}
      </div>
    </>
  );
};

export default ProductCard;

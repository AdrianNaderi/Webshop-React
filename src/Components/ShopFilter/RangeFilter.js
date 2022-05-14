import { useState } from "react";
import classes from "./RangeFilter.module.css";

const RangeFilter = (props) => {
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(100);

  const handleFrom = (e) => {
    console.log(e.target.value);
    setFromPrice(e.target.value);
  };
  const handleTo = (e) => {
    console.log(`Minimum: ${fromPrice} Maximum ${toPrice}`);
    if (e.target.value >= fromPrice) {
      setToPrice(e.target.value);
    }
  };
  return (
    <>
      <h4 className={classes.title}>{props.title}</h4>
      <div>
        <input type="range" className={classes.range1} onChange={handleFrom} />
        <input type="range" className={classes.range2} onChange={handleTo} />
      </div>
    </>
  );
};

export default RangeFilter;

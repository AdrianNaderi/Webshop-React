import { useState } from "react";
import classes from "./RangeFilter.module.css";

const RangeFilter = (props) => {
  return (
    <div className={classes.filter}>
      <h4 className={classes.title}>{props.title}</h4>
      <div>Under development.</div>
    </div>
  );
};

export default RangeFilter;

import { useState } from "react";
import { displayoptions } from "../../SD/placeholders";
import classes from "./DisplayOptions.module.css";

const DisplayOptions = (props) => {
  const [target, setTarget] = useState("list");
  const handleDisplayOption = (option) => {
    props.onDisplay(option);
    setTarget(option);
  };
  const options = displayoptions.map((option) => (
    <span className={classes.icon}>
      <i className={`${option.value} ${target === option.name ? classes.active : ""}`} onClick={() => handleDisplayOption(option.name)}></i>
    </span>
  ));
  return (
    <>
      <div className={classes.options}>{options}</div>
    </>
  );
};

export default DisplayOptions;

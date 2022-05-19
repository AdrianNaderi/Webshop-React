import { useState } from "react";
import { countOptions } from "../../SD/placeholders";
import classes from "./DisplayCountOptions.module.css";
const DisplayCountOptions = (props) => {
  const [target, setTarget] = useState(9);

  const handleCountFilter = (e) => {
    console.log(+e.target.textContent);
    setTarget(+e.target.textContent);
    props.onDisplayCount(e.target.textContent);
  };

  const count = countOptions.map(
    (count, index) =>
      (index !== countOptions.length - 1 && (
        <>
          <span onClick={handleCountFilter} className={`${count === target ? classes.active : ""} ${classes.option}`}>
            {count}
          </span>
          <span> / </span>
        </>
      )) ||
      (index === countOptions.length - 1 && (
        <span onClick={handleCountFilter} className={`${count === target ? classes.active : ""} ${classes.option}`}>
          {count}
        </span>
      ))
  );
  return (
    <>
      <div className={classes.options}>
        <span>Show: {count}</span>
      </div>
    </>
  );
};

export default DisplayCountOptions;

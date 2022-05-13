import StringFilterItem from "./StringFilterItem";
import classes from "./StringFilter.module.css";
import { useState } from "react";

const StringFilter = (props) => {
  const [target, setTarget] = useState(null);

  const handleActive = (name) => {
    if (name === target) {
      setTarget(null);
      return;
    }
    setTarget(name);
  };
  const showCategories = props.items.map((item) => <StringFilterItem key={item.name} item={item} active={item.name === target ? true : false} onActive={handleActive} />);
  return (
    <>
      <h4 className={classes.title}>{props.title}</h4>
      <ul className={classes.list}>{showCategories}</ul>
    </>
  );
};

export default StringFilter;

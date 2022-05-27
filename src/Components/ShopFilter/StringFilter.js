import StringFilterItem from "./StringFilterItem";
import classes from "./StringFilter.module.css";
import { useState } from "react";
import StringFilterCheckboxItem from "./StringFilterCheckboxItem";

const StringFilter = (props) => {
  const [target, setTarget] = useState(null);

  const handleActive = (name) => {
    if (name === target) {
      props.onRemoveFilter();
      setTarget(null);
      return;
    }
    props.onFiltering(name);
    setTarget(name);
  };
  
  let showCategories;
  if (props.checkbox) {
    showCategories = props.items.map((item) => <StringFilterCheckboxItem key={item.name} item={item} active={item.name === target ? true : false} onActive={handleActive} />);
  } else {
    showCategories = props.items.map((item) => <StringFilterItem key={item.name} item={item} active={item.name === target ? true : false} onActive={handleActive} />);
  }
  return (
    <div className={classes.filter}>
      <h4 className={classes.title}>{props.title}</h4>
      <ul className={classes.list}>{showCategories}</ul>
    </div>
  );
};

export default StringFilter;

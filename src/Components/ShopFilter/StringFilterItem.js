import FilterBadge from "./FilterBadge";
import classes from "./StringFilterItem.module.css";

const StringFilterItem = (props) => {
  // const active = classes.active;

  return (
    <li className={`${classes.row}`}>
      <span>{props.item.name}</span>
      <FilterBadge quantity={props.item.quantity} />
    </li>
  );
};

export default StringFilterItem;

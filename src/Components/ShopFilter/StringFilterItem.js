import FilterBadge from "./FilterBadge";
import classes from "./StringFilterItem.module.css";

const StringFilterItem = (props) => {
  const activeStyle = props.active ? classes.active : classes.notactive;

  return (
    <li className={`${classes.row} ${activeStyle}`} onClick={() => props.onActive(props.item.name)}>
      <span>{props.item.name}</span>
      <FilterBadge quantity={props.item.quantity} />
    </li>
  );
};

export default StringFilterItem;

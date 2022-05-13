import FilterBadge from "./FilterBadge";
import classes from "./StringFilterItem.module.css";

const StringFilterItem = (props) => {
    const activeStyle = props.active ? 'red' : 'black'
  
    return (
    <li className={`${classes.row}`} onClick={() => props.onActive(props.item.name)} style={{color: activeStyle}}>
      <span>{props.item.name}</span>
      <FilterBadge quantity={props.item.quantity} />
    </li>
  );
};

export default StringFilterItem;

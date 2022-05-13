import FilterBadge from "./FilterBadge";
import classes from "./StringFilterItem.module.css";

const StringFilterCheckboxItem = (props) => {
  return (
    <div onClick={() => props.onActive(props.item.name)}>
      <li className={`${classes.row}`}>
        <div className={classes.checkbox}>
          <div className={classes.border} style={{ backgroundColor: `${props.item.color}` }}>
            <div className={classes.indicator}>
              {props.active && <i class="fa-solid fa-check"></i>}
              {props.active === true && <i class="fa-solid fa-check"></i>}
            </div>
          </div>
          <div className={classes.label}>{props.item.name}</div>
        </div>
        <FilterBadge quantity={props.item.quantity} />
      </li>
    </div>
  );
};

export default StringFilterCheckboxItem;

{
  /* <input className={classes.check} type="checkbox" checked={props.active} />
{props.item.name} */
}

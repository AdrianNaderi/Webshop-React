import classes from "./FilterBadge.module.css";

const FilterBadge = (props) => {
  const badgeStyle = props.active ? classes.active : classes.badge;

  return (
    <div className={badgeStyle}>
      <span className={classes.quantity}>{props.quantity}</span>
    </div>
  );
};

export default FilterBadge;

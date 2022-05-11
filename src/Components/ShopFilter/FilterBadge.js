import classes from "./FilterBadge.module.css";

const FilterBadge = (props) => {
  const active = classes.active;

  return (
    <div className={classes.badge}>
      <span className={classes.quantity}>{props.quantity}</span>
    </div>
  );
};

export default FilterBadge;

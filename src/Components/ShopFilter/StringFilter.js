import StringFilterItem from "./StringFilterItem";
import classes from "./StringFilter.module.css";

const StringFilter = (props) => {
  const showCategories = props.items.map((item) => <StringFilterItem key={item.name} item={item} />);

  return (
    <>
      <h4 className={classes.title}>{props.title}</h4>
      <ul className={classes.list}>{showCategories}</ul>
    </>
  );
};

export default StringFilter;

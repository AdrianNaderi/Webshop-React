import { orderByOptions } from "../../SD/placeholders";
import classes from "./OrderByOptions.module.css";

const OrderByOptions = (props) => {
  const options = orderByOptions.map((option) => <option>{option}</option>);

  return (
    <div className={classes.options}>
      <select className={classes.dropdown} onChange={(e) => props.onOrderBy(e.target.value)}>
        {options}
      </select>
    </div>
  );
};

export default OrderByOptions;

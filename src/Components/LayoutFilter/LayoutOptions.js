import OrderByOptions from "./OrderByOptions";
import classes from "./LayoutOptions.module.css";
import DisplayOptions from "./DisplayOptions";
import DisplayCountOptions from "./DisplayCountOptions";
import { useDispatch } from "react-redux";
import { filterActions } from "../../store/filter-slice";

const LayoutOptions = () => {
  const dispatch = useDispatch();

  return (
    <div className={classes.container}>
      <div className={classes.position}>
        <DisplayCountOptions onDisplayCount={(displayCount) => dispatch(filterActions.setDisplayCount({ displayCount: displayCount }))} />
        <DisplayOptions onDisplay={(display) => dispatch(filterActions.setDisplay({ display: display }))} />
        <OrderByOptions onOrderBy={(orderBy) => dispatch(filterActions.setOrderBy({ orderBy: orderBy }))} />
      </div>
    </div>
  );
};

export default LayoutOptions;

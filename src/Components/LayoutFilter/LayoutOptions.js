import OrderByOptions from "./OrderByOptions";
import classes from "./LayoutOptions.module.css";
import DisplayOptions from "./DisplayOptions";
import DisplayCountOptions from "./DisplayCountOptions";

const LayoutOptions = () => {
  return (
    <div className={classes.position}>
      <DisplayCountOptions />
      <DisplayOptions />
      <OrderByOptions />
    </div>
  );
};

export default LayoutOptions;

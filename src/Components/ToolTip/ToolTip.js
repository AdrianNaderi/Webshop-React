import classes from "./ToolTip.module.css";

const ToolTip = (props) => {
  return (
    <div className={classes.container}>
      {props.children}
      <span className={classes.tooltiptext}>{props.text}</span>
    </div>
  );
};

export default ToolTip;

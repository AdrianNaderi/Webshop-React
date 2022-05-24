import classes from "./StatusIcon.module.css";

const StatusIcon = (props) => {
  let iconStyle = {};
  if (props.status === "new") {
    iconStyle = classes.new;
  }
  if (props.status === "hot") {
    iconStyle = classes.hot;
  }
  if (props.status === "sale") {
    iconStyle = classes.sale;
  }
  return <div className={`${iconStyle} ${classes.icon}`}>{props.value}</div>;
};

export default StatusIcon;

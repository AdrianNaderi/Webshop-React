import classes from "./NavigationIcon.module.css";

const NavigationIcon = (props) => {
  return <i className={`${props.icon} ${classes.icon}`}></i>;
};

export default NavigationIcon;

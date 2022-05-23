import classes from "./Content.module.css";

const Fifty = (props) => {
  return <div className={classes.fifty}>{props.children}</div>;
};

export default Fifty;

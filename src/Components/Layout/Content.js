import classes from "./Content.module.css";

const Content = (props) => {
  const color = props.color;
  return (
    <div className={classes.content} style={{ backgroundColor: color }}>
      {props.children}
    </div>
  );
};

export default Content;

import classes from "./Content.module.css";
import ContentDescription from "./ContentDescription";

const Content = () => {
  return (
    <>
      <div className={classes.container}>
        <ContentDescription />
      </div>
    </>
  );
};

export default Content;

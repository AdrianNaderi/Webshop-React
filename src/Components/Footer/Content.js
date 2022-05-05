import classes from "./Content.module.css";
import ContentContactInfo from "./ContentContactInfo";
import ContentDescription from "./ContentDescription";

const Content = () => {
  return (
    <>
      <div className={classes.container}>
        <ContentDescription />
      </div>
      <div className={classes.container}>
        <ContentContactInfo />
      </div>
    </>
  );
};

export default Content;

import classes from "./Content.module.css";
import ContentContactInfo from "./ContentContactInfo";
import ContentDescription from "./ContentDescription";
import ContentUsefulLinks from "./ContentUsefulLinks";

const Content = () => {
  return (
    <>
      <div className={classes.container}>
        <ContentDescription />
      </div>
      <div className={classes.container}>
        <ContentContactInfo />
      </div>
      <div className={classes.container}>
        <ContentUsefulLinks />
      </div>
    </>
  );
};

export default Content;

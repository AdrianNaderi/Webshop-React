import classes from "./ContentContactInfo.module.css";

const ContentContactInfo = () => {
  return (
    <div className={classes.column}>
      <h3 className={classes.title}>CONTACT INFO</h3>
      <h4 className={classes.subject}>Address:</h4>
      <p className={classes.content}>Solna Business Park</p>
      <p className={classes.content}>Feni-2500, Stockholm</p>
      <h4 className={classes.subject}>Phone:</h4>
      <p className={classes.content}>+08-123456789</p>
      <p className={classes.content}>+08-123456789</p>
      <h4 className={classes.subject}>Email:</h4>
      <p className={classes.content}>support@website.com</p>
      <p className={classes.content}>info@website.com</p>
    </div>
  );
};

export default ContentContactInfo;

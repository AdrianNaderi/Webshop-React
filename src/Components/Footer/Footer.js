import Content from "./Content";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={classes.footer}>
        <div className={classes.contentcontainer}>
          <Content />
        </div>
      </div>
    </>
  );
};
export default Footer;

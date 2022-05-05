import classes from "./ContentUsefulLinks.module.css";
const ContentUsefulLinks = () => {
  return (
    <>
      <h3 className={classes.title}>USEFUL LINKS</h3>
      <a className={classes.link}>Privacy Policy</a>
      <br />
      <a className={classes.link}>Terms & Conditions</a>
      <br />
      <a className={classes.link}>Contact Us</a>
      <br />
      <a className={classes.link}>Our Sitemap</a>
      <br />
      <a className={classes.link}>Latest News</a>
      <br />
      <a className={classes.link}>Returns</a>
    </>
  );
};

export default ContentUsefulLinks;

import Content from "./Content";
import classes from "./Footer.module.css";
import PaymentServices from "./PaymentServices";

const Footer = () => {
  return (
    <>
      <div className={classes.footer}>
        <div className={classes.contentcontainer}>
          <Content />
        </div>
      </div>
      <div className={classes.paymentservices}>
        <div className={classes.paymentservicecontainer}>
          <PaymentServices />
        </div>
      </div>
    </>
  );
};
export default Footer;

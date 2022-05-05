import classes from "./PaymentServices.module.css";

const PaymentServices = () => {
  return (
    <>
      <span className={classes.copyright}>© Copyright 2020 KenKata</span>
      <img className={classes.services} src="/img/paymentservices.png" />
    </>
  );
};

export default PaymentServices;

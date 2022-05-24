import { useParams } from "react-router-dom";
import classes from "./ProductDetail.module.css";
import ProductDetailCart from "./ProductDetailCart";

const ProductDetail = () => {
  const params = useParams();

  const tags = ["Fashion", "Shoes", "Sneakers"].map((item) => <button>{item}</button>);

  //   console.log(params.productId);
  return (
    <div className={classes.container}>
      <div className={classes.description}>
        <h3 className={classes["cat-span"]}>NAME</h3>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ea nulla fuga
          distinctio nostrum. Quod debitis exercitationem nostrum eligendi aliquid iure, dignissimos
          numquam libero sapiente odio natus ex corrupti.
        </span>
      </div>
      <div className={classes.detail}>
        <div className={classes.pricing}>
          <hr />
          <span className={classes.sale}>$190.00</span>
          <span className={classes.price}>$220.00</span>
          <span>
            <i className="bi bi-check-square-fill"></i> In Stock
          </span>
        </div>
        <ProductDetailCart />
        <div className={classes.tags}>
          <span>
            Category: <span className={classes["cat-span"]}>Shoes</span>
          </span>
          <span>
            Tags: &nbsp;&nbsp;
            {tags}
          </span>
          <div className={classes.share}>
            <span>Share:&nbsp;&nbsp;</span>
            <img src="/img/share.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

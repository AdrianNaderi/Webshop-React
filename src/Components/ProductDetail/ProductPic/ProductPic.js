import ProductPicItem from "./ProductPicItem";
import classes from "./ProductPic.module.css";

const ProductPic = () => {
  const largeImg = { width: "425px", height: "445px" };
  const smallImg = { width: "100px", height: "100px" };

  return (
    <div className={classes.container}>
      <div className={classes["main-img"]}>
        <ProductPicItem pic="large" style={largeImg} />
      </div>
      <div className={classes["side-img"]}>
        <ul>
          <li>
            <ProductPicItem pic="frontsize" style={smallImg} />
          </li>
          <li>
            <ProductPicItem pic="innerside" style={smallImg} />
          </li>
          <li>
            <ProductPicItem pic="under" style={smallImg} />
          </li>
          <li>
            <ProductPicItem pic="outerside" style={smallImg} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductPic;
